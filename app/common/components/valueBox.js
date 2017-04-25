angular.module('primeiraApp').component('valueBox', {
  bindings: {
    grid: '@',
    colorClass: '@',
    value: '@',
    text: '@',
    iconClass: '@',
  },
  controller: [
    'gridSystem',
    function(gridSystem) {
      /* a linha de código: this.gridClasses = gridSystem.toCssClasses(this.drid)
      // foi colocada debtro do ciclo de vida através do método onInit
      // mais informações em:  https://blog.thoughtram.io/angularjs/2016/03/29/exploring-angular-1.5-lifecycle-hooks.html
      // outra forma: this.$onInit = function() { this.gridClasses = gridSystem.toCssClasses(this.grid)}
      */
      this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
    }
  ],
  template: `
  <div class="{{ $ctrl.gridClasses }}">
    <div class="small-box {{ $ctrl.colorClass }}">
      <div class="inner">
        <h3>{{ $ctrl.value }}</h3>
        <p>{{ $ctrl.text }}</p>
      </div>
      <div class="icon">
        <i class="{{ $ctrl.iconClass }}"></i>
      </div>
    </div>
  </div>
  `
})
