import './StyleLrn.css'
import style from './custom.module.css'
function StyleLrn(){
    return(
        <div>
            <h2 className="primary">This is Style component</h2>
            <h2 style={{color:'red',backgroundColor:'blueviolet'}}>This is the second style</h2>
            <h2 className={style.success}>This is the third styling method</h2>
        </div>
    )
}

export default StyleLrn