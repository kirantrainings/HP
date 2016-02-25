describe('Unit test JobList controller',function(){
    var scope,ctrl;
    beforeEach(function(){
        module('app');
    });
    beforeEach(inject(function ($rootScope, $controller) {
            scope=$rootScope.$new();
            scope.iamNew="abcd";
            ctrl = $controller('jobListCtrl',
                {$scope:scope}
            );
     })
    );
    describe('expectation-',function(){
        it('scope should not be null',function(){
                expect(scope).toBeDefined();
        });

        it('scope.addJobs should add job to array',function(){
            var item = {name:"abcd",descript:"Helloo"};
            scope.addJob(item);
            expect(scope.jobs.length).toEqual(3)
        });
    });
});








