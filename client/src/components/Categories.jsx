import { useNavigate } from 'react-router-dom'


const Categories = (props) => {
  let navigate = useNavigate()

  const showCategories = (category) => {
    navigate(`${category._id}`)                   
  }


return (
    <div className="category-grid">
      {
        props.categories?.map((category) =>(
          <div className="category-card" onClick={() => showCategories(category)} key={category.id}>
            <img style={{display : 'block'}} src={category.url} alt={category.description} />
            <h3>{category.posts}</h3>
            </div>
        ))}
    </div>
  )
}

export default Categories