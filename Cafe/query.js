class Query {
  constructor() {
    this.data = [];
    this.funcPredicateSelect = (i) => i;
    this.funcPredicateWhere = (i) => true;
    this.funcPredicateGroupBy = null;
  }
  select(funcPredicate = (f) => f) {
    this.funcPredicateSelect = funcPredicate;
    return this;
  }
  from(data) {
    this.data = data;
    return this;
  }

  where(funcPredicateWhere = (i) => true) {
    this.funcPredicateWhere = funcPredicateWhere;
    return this;
  }

  groupBy(...funcPredicateGroupBy) {
    this.funcPredicateGroupBy = funcPredicateGroupBy;
    return this;
  }
  execute() {
    let data = this.data;
    data = data.filter(this.funcPredicateWhere);

    if (this.funcPredicateGroupBy) {
      const hash = {};
      const groupArray = [];

      data.forEach((i) => {
        const name = this.funcPredicateGroupBy(i);
        hash[name] = hash[name] || [];
        hash[name].push(i);
      });
      data = Object.keys(hash).map((name) => {
        return [name, hash[name]];
      });
    }
    data = data.map(this.funcPredicateSelect);

    return data;
  }
}

module.exports = () => new Query();
