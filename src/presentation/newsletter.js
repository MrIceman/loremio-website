import React, {useState} from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState()
    const [subscribed, setSubscribed] = useState(false);
    const handleSubscribe = async () => {
        console.log("FUCK")
        setEmail("")
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
        }, 5000);
        try {
            const response = await fetch(
                `https://spddb7biyj.execute-api.eu-central-1.amazonaws.com/production/newsletter`,
                {
                    method: "POST",
                    body: {
                        "email": email,
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

            setEmail("")
            const json = await response.json()

            // Reset the subscribed state after a certain duration (optional)

            if (json.status === "success") {
                return
            }

        } catch (err) {
            console.log(err)
        }
    };
    const handleEmailChange = (event) => {
        const {value} = event.target
        setEmail(value)
    }

    return (
        <div className="newsletter">
            <h2>Abonniere unseren Newsletter</h2>
            <div className="input-container">
                {subscribed && <p>Du hast dich erfolgreich bei unserem Newsletter angemeldet</p>}
                {!subscribed && <input
                    value={email}
                    type="email"
                    placeholder="Deine Email-Adresse"
                    onChange={handleEmailChange}/>}
                {!subscribed && <button onClick={() => {
                    handleSubscribe().then(r => {
                        setEmail("")
                    });

                }}>Abonieren</button>}
            </div>
        </div>
    );
};

export default Newsletter;
