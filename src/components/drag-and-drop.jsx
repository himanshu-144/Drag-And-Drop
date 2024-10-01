import React, { useRef, useState } from 'react'

const DragAndDrop = ({initialData}) => {
  
  const[data, setData] = useState(initialData);

  const dragItem = useRef();
  const dragBox = useRef();
  
  const handleDragStart = (e, item, box)=>{
      e.target.style.opacity = ".5"
      dragItem.current = item;
      dragBox.current = box;
  };
  const handleDragEnd = (e)=>{
     e.target.style.opacity = "1"
  };

  const handleDrop = (targetBox)=>{
    const item = dragItem.current;
    const sourceBox = dragBox.current;
    setData(prevData=>{
        const newData = { ...prevData};
        newData[sourceBox] = newData[sourceBox].filter(f=>f !== item);
        newData[targetBox] = [...newData[targetBox], item];
        return newData;
    })

  };

  const handleDrogOver = (e)=>{
     e.preventDefault();
  };


  return (
    <div className='container'>
      {Object.keys(data).map((d,index)=>{
        return (
          <div key={index} style={{minHeight:500, padding:"1rem",width:300}}
            // dropping
            onDrop={(e)=>handleDrop(d)}
            onDragOver={handleDrogOver}
          >
           <h2>{d}</h2>
           {data[d].map((item, idx)=>{
            return(
                <div key={idx} className='item'
                 draggable
                 onDragStart={(e)=>handleDragStart(e, item, d)}
                 onDragEnd={handleDragEnd}
                >
                  {item}
                </div>
            )
           })}
          </div>
        )
      })}
    </div>
  )
}

export default DragAndDrop
