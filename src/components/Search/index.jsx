import './styles.css'
export const Search = (props) => {

    // Search bar
    return (
        <input className="search-input" name="search" placeholder="Search by brand..." type="text" onChange={props.handleSearchUpdate} />
    )
}