const selectFunction = (i) => i;

class Query {
  constructor() {
    this.data = null;
    this.funcPredicateSelect = null;
    this.funcPredicateWhere = [];
    this.funcPredicateGroupBy = null;
    this.funcPredicateOrderBy = null;
    this.funcPredicateHaving = null;
  }
  select(funcPredicate = (f) => f) {
    if (this.funcPredicateSelect) throw new Error("Duplicate SELECT");
    this.funcPredicateSelect = funcPredicate;
    return this;
  }
  from(...data) {
    if (this.data) throw new Error("Duplicate FROM");
    this.data = data;
    return this;
  }

  where(...funcPredicateWhere) {
    this.funcPredicateWhere.push(funcPredicateWhere);
    return this;
  }

  groupBy(...funcPredicateGroupBy) {
    if (this.funcPredicateGroupBy) throw new Error("Duplicate GROUPBY");
    this.funcPredicateGroupBy = funcPredicateGroupBy;
    return this;
  }

  orderBy(funcPredicateOrderBy) {
    if (this.funcPredicateOrderBy) throw new Error("Duplicate ORDERBY");
    this.funcPredicateOrderBy = funcPredicateOrderBy;
    return this;
  }

  having(funcPredicateHaving) {
    this.funcPredicateHaving = this.funcPredicateHaving || [];
    this.funcPredicateHaving.push(funcPredicateHaving);
    return this;
  }
  execute() {
    let data = this.data || [];

    //https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
    const f = (a, b) =>
      [].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
    const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

    if (data.length) data = cartesian(...data);

    if (this.funcPredicateWhere) {
      data = data.filter((i) => {
        return this.funcPredicateWhere.every((where) =>
          where.some((or) => or(i))
        );
      });
    }

    const groupByFunc = (items, predicate) => {
      const hash = {};
      const groupArray = [];
      items.forEach((i) => {
        const name = predicate(i);
        hash[name] = hash[name] || [];
        hash[name].push(i);
      });
      return Object.keys(hash).map((name) => {
        [name, hash[name]];
      });
    };

    if (this.funcPredicateGroupBy) {
      const groupArray = [];
      data.forEach((items) => {
        const keys = this.funcPredicateGroupBy.map((k) => k(items));
        const group = keys.reduce((groupArray, key) => {
          let group = groupArray.find((f) => f && f[0] == key);
          if (!group) {
            group = [key, []];
            groupArray.push(group);
          }
          return group[1];
        }, groupArray);
        group.push(items);
      });
      // this.funcPredicateGroupBy.forEach((predicate) => {
      //   data = groupByFunc(data, predicate);
      // });

      data = groupArray;
    }

    if (this.funcPredicateHaving) {
      this.funcPredicateHaving.forEach((f) => (data = data && data.filter(f)));

      //data = this.funcPredicateHaving.reduce((data, v) => data.filter(v), data);
    }
    if (this.funcPredicateSelect) data = data.map(this.funcPredicateSelect);

    if (this.funcPredicateOrderBy) {
      data.sort(this.funcPredicateOrderBy);
    }

    return data;
  }
}
const query = () => new Query();
module.exports = () => new Query();
