import React from 'react';
import "../Style/style.scss"

function Card (){
return (
   <div className='box'> 

   <div className='image'>
<img src="image.jpg" alt="image" />
   </div>
    <div className='content'>
    <h1>Title</h1>
    <h2>Secondry Text</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus cum id voluptates quam ipsa omnis <br /> non architecto ex consequuntur nihil rerum quasi impedit, ipsum provident vel unde recusandae fugit!</p>
   <hr />
   
   <h2>Subtitle</h2>

   <div className='But'>
   <button>Item 1</button>
   <button>Item 2</button>
   <button>Item 3</button>
   <button>Item 4</button>
   </div>

   </div>
   </div> 
)
}

export default Card