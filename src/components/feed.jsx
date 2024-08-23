import "../css/page.css"

function Feed (props) {
  return (
    <div className="column feed">
      {props.children}
    </div>
  )
}



export default Feed;