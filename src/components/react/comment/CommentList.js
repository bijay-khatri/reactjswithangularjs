class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(comment) {
        console.log('Received in CommentList(React)', comment);
        this.props.onDelete(comment);
    }

    render() {
        const commentList = this.props.comments.map(c => <SingleComment comment= {c} key = {c.id} onDelete= {this.handleDelete} />);
    return (
        <React.Fragment>
            <h1> List of Available Comments </h1> 
            {commentList}
        </React.Fragment>
        );
    }
}