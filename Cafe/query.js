class Query {
  constructor() {
    this.data = [];
    this.funcPredicateSelect = (i) => i;
  }
  select(funcPredicate = (f) => f) {
    this.funcPredicateSelect = funcPredicate;
    return this;
  }
  from(data) {
    this.data = data;
    return this;
  }
  execute() {
    return this.data.map(this.funcPredicateSelect)
  }
}

module.exports = () => new Query();
