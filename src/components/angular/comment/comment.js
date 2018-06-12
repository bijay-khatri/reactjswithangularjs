angular.module('comment', [])
    .component('commentList', {
        template: `{{$ctrl.comments}}`,
        controller: function ($element) {
            var _this = this;

            const testDelete = function(comment) {
                _this.onDelete({comment: comment});
            };

            const renderReactComponent = function () {
                const elem = $element[0];
                ReactDOM.render(<CommentList comments={_this.comments} onDelete ={ testDelete }/>, elem);
            };

            this.$postLink = function () {
                renderReactComponent();
            };

            this.$onChanges = function (obj) {
                if (!obj.comments.isFirstChange()) {
                    renderReactComponent();
                }
            }


            



        },
        bindings: {
            comments: '<',
            onDelete: '&'
        }
    });