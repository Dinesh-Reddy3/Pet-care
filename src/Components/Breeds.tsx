import Nav from "./Nav"
import Footer from "./Footer"
import "../assets/css/Breed.css"
import beagle from "../assets/images/beagle.webp"
import german from "../assets/images/german.jpg"
import pomeranian from "../assets/images/pomeranian.avif"
import rottweiler from "../assets/images/rottweiler.jpg"
import husky from "../assets/images/husky.avif"
import labrador from "../assets/images/labrador.jpg"
import retriever from "../assets/images/retriever.jpeg"
import pariah from "../assets/images/pariah.jpg"
import shih from "../assets/images/shih.jpeg"
import toy from "../assets/images/toy.webp"
import persian from "../assets/images/persian.webp"
import indiancat from "../assets/images/indiancat.webp"
const Breeds = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="breed">
                <div className="breed1">
                    <div className="breeda">
                        <img src={beagle} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>Beagle</h3>
                        <p>
                            Beagles, an ancient breed from England,
                            were developed as scent hounds for tracking small
                            game like rabbits due to their exceptional sense of smell.
                            They have around 220 million scent receptors, making them highly
                            effective for roles in tracking and detection. Known for their stubborn,
                            independent nature, Beagles can be difficult to train, especially when distracted
                            by scents. Partial deafness can occur, though it's not common.
                            Their strong olfactory abilities and determination are key traits of the breed.
                        </p>
                    </div>
                    <div className="breedb">
                        <img src={german} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>German Shepard</h3>
                        <p>
                            German Shepherds originated in Germany in the late 19th century,
                            developed for their versatility as herding and police dogs. Known
                            for their intelligence, loyalty, and protective nature, they can become
                            aggressive if not properly socialised. Due to their high energy and need
                            for regular exercise, they are not well-suited for apartment living and
                            thrive best in environments with ample space.
                        </p>
                    </div>
                </div>
                <div className="breed2">
                    <div className="breedc">
                        <img src={pomeranian} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>Pomeranian</h3>
                        <p>The Pomeranian, a small and lively breed, has its roots in the Pomerania
                            region of northern Europe. Descending from larger Spitz-type dogs
                            , Pomeranians were popularized by European nobility, notably Queen Victoria,
                            who brought them into the spotlight in the 19th century. Known for their distinctive
                            fluffy coats and playful nature, Pomeranians were originally used as herding dogs but
                            are now cherished as affectionate companions.</p>
                    </div>
                    <div className="breedd">
                        <img src={rottweiler} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>Rottweiler</h3>
                        <p>Rottweilers originated in ancient Rome as herding and
                            guard dogs, later used in Rottweil for cattle herding.
                            They are intelligent, strong, and highly trainable but can
                            show aggression without proper socialization. Loyal and protective,
                            they require consistent training and plenty of exercise. Due to their
                            high energy, Rottweilers are not ideal for apartment living unless given
                            enough outdoor activity to prevent restlessness.</p>
                    </div>
                </div>
                <div className="breed3">
                    <div className="breede">
                        <img src={husky} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>Siberian Husky</h3>
                        <p>
                            Huskies are medium-sized, energetic dogs known for their striking
                            appearance and adaptability to cold climates. Originating from the
                            Chukchi people of Siberia over 3,000 years ago, they were bred to pull
                            sleds across icy terrains. Their endurance and speed were crucial for
                            survival in harsh Arctic conditions. Huskies gained fame during the 1925
                            Serum Run to Nome, where they played a key role in delivering lifesaving medicine.
                            Today, they are valued as both hardworking dogs and loyal pets.
                        </p>
                    </div>
                    <div className="breedf">
                        <img src={labrador} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>Labrador Retriever</h3>
                        <p>
                            Labrador Retrievers, originally from Newfoundland and developed in 19th-century
                            Britain, were bred for their retrieving skills to assist fishermen. Their intelligence
                            , friendliness, and eagerness to please have made them popular as family pets and therapy
                            dogs. They are particularly effective in providing emotional support and comfort in
                            settings like hospitals, nursing homes, and schools, helping to reduce stress and
                            enhance well-being.
                        </p>
                    </div>
                </div>
                <div className="breed4">
                    <div className="breedg">
                        <img src={pariah} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3> Indian Pariah</h3>
                        <p>
                            The Indian Pariah also known as Indian Pariah is an ancient breed
                            native to the Indian subcontinent, with a lineage that dates back
                            thousands of years. They were historically used as working dogs for hunting
                            and guarding, adapting well to the diverse environments of India. Known for
                            their intelligence and alert nature, Indian Pariahs are quick learners and highly
                            observant, making them excellent watchdogs. Their adaptability and keen senses have
                            enabled them to thrive in various roles, from guarding homes to assisting in search
                            and rescue operations.
                        </p>
                    </div>
                    <div className="breedh">
                        <img src={retriever} alt="" style={{ width: "300px", height: '200px' }} />
                        <h3>Golden Retriever</h3>
                        <p>
                            Golden Retrievers were developed in 19th-century Scotland by crossing
                            Yellow Retrievers with Tweed Water Spaniels, Bloodhounds,
                            Irish Setters, and other Retrievers to create a versatile hunting dog.
                            Known for their intelligence and friendly temperament, they have also
                            become excellent therapy dogs. Their gentle and empathetic nature makes
                            them ideal for providing emotional support in hospitals, schools, and
                            nursing homes, helping to alleviate stress and promote well-being.
                        </p>
                    </div>
                </div>
                <div className="breed5">
                    <div className="breedi">
                            <img src={shih} alt="" style={{ width: "300px", height: '200px' }} />
                            <h3>Shih Tzu</h3>
                            <p>
                                Shih Tzus, originating from ancient Tibet and bred as companion
                                 dogs for Chinese royalty, are known for their charming, affectionate 
                                 nature and distinctive appearance. They are generally loyal and loving 
                                 with their families but can be moody and unpredictable with unfamiliar people.
                                  This behavior often stems from their strong territorial instincts and need
                                   for socialization. Proper early training and exposure to
                                 different environments can help manage their reactions to new people.
                            </p>
                    </div>
                    <div>
                        <div className="breedj">
                            <img src={toy} alt="" style={{ width: "300px", height: '200px' }} />
                            <h3>Toy Poodle</h3>
                            <p>
                                Toy Poodle is the smallest variety of the poodle breed,
                                 known for its intelligence, elegance, and affectionate personality. 
                                 Standing under 10 inches tall and weighing around 4 to 6 pounds, this 
                                 tiny dog is full of energy and charm. Toy Poodles are highly intelligen
                                  and easy to train, making them excellent companions for families, singles,
                                  and seniors alike. They are very loyal and enjoy being the center of attention, 
                                often forming strong bonds with their owners.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="breed6">
                    <div>
                        <div className="breedk">
                            <img src={persian} alt="" style={{ width: "300px", height: '200px' }} />
                            <h3> Persian Cat</h3>
                            <p>
                                The Persian cat, one of the oldest and most luxurious cat breeds,
                                 traces its origins to ancient Persia (modern-day Iran)
                                  and was introduced to Europe in the 1600s. Known for their long
                                   silky coats and distinct flat faces, Persians embody elegance and grace. 
                                   Their personality is calm, affectionate, and laid-back, making them ideal
                                    companions. They enjoy quiet, comfortable environments and are less active
                                     compared to other breeds. These traits likely stem from their history as 
                                     pampered pets of royalty, 
                                which has shaped their gentle and serene demeanor over centuries.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="breedl">
                             <img src={indiancat} alt="" style={{ width: "300px", height: '200px' }} />
                            <h3>Indian Cat</h3>
                            <p>
                                Indie cats, also known as Indian domestic cats,
                                 have a rich ancestral history as street-smart survivors,
                                  naturally adapting to the diverse environments of India. 
                                  Their lineage stems from wild, free-roaming cats, making
                                   them highly resilient and independent. Over generations,
                                    they've developed strong hunting instincts, sharp intelligence,
                                     and remarkable adaptability. Known for their diverse looks and hardy nature, 
                                     Indie cats thrive on minimal care, 
                                often relying on their natural instincts for survival.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Breeds