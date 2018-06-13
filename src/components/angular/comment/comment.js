angular.module('comment', [])
    .component('commentList', {
        controller: ['$element', function ($element) {
            var _this = this;

            const testDelete = function(comment) {
                _this.onDelete({comment: comment});
            };

            const renderReactComponent = function () {
                const elem = $element[0];
                ReactDOM.render(<CommentList comments={_this.data} onDelete ={ testDelete }/>, elem);
            };

            this.$onChanges = function () {
                renderReactComponent();
            }
        }],
        bindings: {
            data: '<',
            onDelete: '&'
        }
    });