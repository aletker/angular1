(function() {
  angular.module('primeiraApp').component('paginator', {
    bindings: {
      url: '@',
      pages: '@',
    },
    controller: [
      '$location' ,
      function($location) {
        this.$onInit = function() {
          const pages = parseInt(this.pages) || 1
          console.log("Pages: ", pages);
          this.pagesArray = Array(pages).fill(0).map((e,i) => i + 1 )
          console.log("pagesArray: ", this.pagesArray);
        }
        this.current = parseInt($location.search().page) || 1
        console.log("location: ", $location.search().page );
        console.log("pagina atual: ", this.current);
        this.needPagination = this.pages > 1
        console.log("obj this: ", this);
        console.log("Pages: vm", pages);
        console.log("necessita paginação: ", this.needPagination);
        this.hasPrev = this.current > 1
        console.log("necessita ant.pag: ", this.hasPrev);
        this.hasNext = this.current < this.pages
        console.log("necessita próx.pag: ", this.hasNext);

        this.isCurrent = function(i){
          return this.current == i
        }
      }

    ],
    template: `
    <ul ng-if="$ctrl.needPagination" class="pagination">
      <li ng-if="$ctrl.hasPrev">
        <a href="{{ $ctrl.url }}?page={{ $ctrl.current -1 }}">Anterior</a>
      </li>

      <li ng-class="{active: $ctrl.isCurrent(index)}" ng-repeat="index in $ctrl.pagesArray">
        <a href="{{ $ctrl.url }}?page={{ index }}">{{ index }}</a>
      </li>

      <li ng-if="$ctrl.hasNext">
        <a href="{{ $ctrl.url }}?page={{ $ctrl.current + 1 }}">Próximo</a>
      </li>
    </ul>
    `
  })
})()
