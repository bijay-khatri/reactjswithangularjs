console.log('hello world');

const reactRoot = document.querySelector('#reactRoot');

const comments = [{
    id: 1,
    text: 'comment one'
},
{
    id: 2,
    text: 'comment two'
}];

// ReactDOM.render(<CommentList comments = {comments}/>, reactRoot);\

angular.module('myApp', ['comment'])
.controller('MyController', function() {
    var _this = this;
    this.comments = comments;

    this.addComment = function(comment) {
        this.comments = this.comments.concat({id: this.comments.length + 1, text: comment});
    };

    this.handleDelete = function(comment) {
        console.log('Received in appjs (angular)', comment);
        this.comments = this.comments.filter( c => c.id != comment.commentId);
        
    }
});

angular.bootstrap(document, ['myApp']);