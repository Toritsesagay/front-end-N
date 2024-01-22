import { useSelector } from "react-redux";
import styles from "./Transfer.module.css";


let TransferModal = ({ closeFavorite }) => {
    let { user, color } = useSelector(state => state.userAuth)

    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>
            
            <div className={styles.body}>
                
                <h4>
                    Transfer funds within
                </h4>

                <button onClick={()=>closeFavorite('myBank')} className={styles.transferbutton}>my bank</button>
                <button onClick={()=>closeFavorite('otherBank')} className={styles.transferbutton}>other bank</button>



            </div>



        </div>

    </div>
}

export default TransferModal