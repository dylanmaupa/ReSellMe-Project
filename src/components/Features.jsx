import { ReactComponent as Icon1 } from "../assets/images/purchase-rates-icon.svg"
import { ReactComponent as Icon2 } from "../assets/images/instant-payouts-icon.svg"
import { ReactComponent as Icon3 } from "../assets/images/no-monthly-icon.svg"
import { ReactComponent as Icon4 } from "../assets/images/business-auto-icon.svg"

const Features = ({feature}) => {
  return (
    <section className="features">
        <div className="heading">
            <h2 className="sm">{feature.title}</h2>
            <p>{feature.text}</p>
        </div>
        <div className="wrapper">
            {feature.cards && feature.cards.map(card => {
                return(
                    <div className="card">
                        <div className="icon"></div>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Features