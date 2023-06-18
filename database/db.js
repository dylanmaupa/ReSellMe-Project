import { ReactComponent as RegIcon } from "../src/assets/images/register-icon.svg"
import { ReactComponent as ClientIcon } from "../src/assets/images/money-icon.svg"
import { ReactComponent as MonIcon } from "../src/assets/images/find-client-icon.svg"

import { ReactComponent as Icon1 } from "../src/assets/images/purchase-rates-icon.svg"
import { ReactComponent as Icon2 } from "../src/assets/images/instant-payouts-icon.svg"
import { ReactComponent as Icon3 } from "../src/assets/images/no-monthly-icon.svg"
import { ReactComponent as Icon4 } from "../src/assets/images/business-auto-icon.svg"

const data = {
    Hero:[
        {
            title:"Buy and sell domains with no capital!",
            text:"Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes."
        }
    ],
    About:[
        {
            title:"Wait, What?",
            text:"Resellme allows for you to purchase domains through our platform without paying money upfront. All you need to do is have a client who will pay for the domain and you get to keep the profit deducted from the domain purchase price!",
            text2:"Buying domains through the platforms is ",
            text3:"SUPER CHEAP"
        }
    ],
    GetStarted:[
        {
            title:"How To Get Started",
            cards:[
                {
                    id:1,
                    title:"Register",
                    text:"To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method.",
                    num: 1,
                    icon: RegIcon
                },
                {
                    id:2,
                    title:"Find Clients",
                    text:"Find a client who can be a business owner or a freelancer who wants a website but does not have a domain.",
                    text2:"You take lead to buy the desired domain via ReSellMe for the client upfront.",
                    num:2,
                    "icon": ClientIcon
                },
                {
                    id:3,
                    title:"Get Paid",
                    text:"You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit.", 
                    text2:"Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru",
                    num:3,
                    icon: MonIcon
                }
            ]
        }
    ],
    Features:[
        {
            title:"Resellme’s Features",
            text:"The Resellme platform has a wide range of features which make it stand out from all competitors. Here we have just a few of those.",
            cards:[
                {
                    icon: Icon1 ,
                    title:"Best Purchase Rates",
                    text:"You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors"
                },
                {
                    icon: Icon2 ,
                    title:"Instant Payouts",
                    text:"USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right?"
                },
                {
                    icon: Icon3 ,
                    title:"No Monthly Commitments",
                    text:"As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit."
                },
                {
                    icon: Icon4 ,
                    title:"Business Automation",
                    text:"Place your business on autopilot by making use of our plugins. Head over to our plugins & intergrations panel to get started"
                }
            ]
        }
    ]
}

export default data