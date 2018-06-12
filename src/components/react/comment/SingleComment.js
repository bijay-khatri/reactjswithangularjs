class SingleComment extends React.Component {
    constructor(props){
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem($event) {
        const requiredId = $event.target.id;
        console.log("Required Id", requiredId);
        this.props.onDelete({commentId: requiredId});
    }

    render() {
        return (
        <div style = {{ 'float': 'clear', marginBottom: '1rem','color': '#fff', backgroundColor: '#000', padding: '2rem' }} > 
           <div style = {{ float: 'left'}}> { this.props.comment.text } </div>
           <div style ={{ float: 'right'}}> <button id = {this.props.comment.id } onClick= {this.deleteItem} type='button'> delete </button> </div>
        </div>);
    }
}