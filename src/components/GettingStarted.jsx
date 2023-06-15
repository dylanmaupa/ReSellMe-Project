import { ReactComponent as RegIcon } from "../assets/images/register-icon.svg"
import { ReactComponent as ClientIcon } from "../assets/images/money-icon.svg"
import { ReactComponent as MonIcon } from "../assets/images/find-client-icon.svg"



const GettingStarted = ({start}) => {
    const icons = [RegIcon,ClientIcon,MonIcon];

  return (
    <section className="get-start">
        <h2 className="sm">{start.title}</h2>
        <div className="wrapper">
            {start.cards && start.cards.map(card => {
                return(
                    <div className="card">
                        {/* {icons && icons.map(Icon => {
                            <div className="img">
                                <Icon/>
                            </div>
                        })} */}
                        <RegIcon/>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <p>{card.text2}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default GettingStarted