angular.module('myApp', ['comment'])
.controller('MyController', function($scope) {
    var _this = this;
    this.comments = [{
        id: 1,
        text: 'comment one'
    },
    {
        id: 2,
        text: 'comment two'
    }];

    this.addComment = function(comment) {
        this.comments = this.comments.concat({id: this.comments.length + 1, text: comment});
    };

    this.handleDelete = function(comment) {
        console.log('Received in appjs (angular)', comment);
        $scope.$apply(() => this.comments = this.comments.filter( c => c.id != comment.commentId));
    }
});

angular.bootstrap(document, ['myApp']);