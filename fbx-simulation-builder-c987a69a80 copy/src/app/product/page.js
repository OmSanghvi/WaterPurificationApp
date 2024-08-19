export default function Product() {
    return (
        <div className = "fade-in">
            <h2 className="product-title">Our Product</h2>
            <img src="/WaterPurifier.png" className="product-image" alt="Product Image" />
            <h3>Problem</h3>
            <p>
                Microplastics and plastic pollution are very harmful to various ecosystems. Many small plastic particles, which often result from the breakdown of larger plastic waste, infiltrate aquatic ecosystems. Here, they are consumed by other animals and wildlife, leading to both physical and chemical harm. These animals mistake microplastics for food, which can cause internal injuries, and possibly death. The accumulation of plastics in lakes affects biodiversity and the health of aquatic plants and animals. Additionally, microplastics can input harmful chemicals into the water, further deteriorating water quality and presenting risks to human health through the consumption of contaminated water and fish. The tenacity of plastic waste and microplastics in the environment will cause detrimental effects that can last for many years, making it very important to address this issue.
            </p>

            <h3>Solution</h3>
            <p>
                Our product is a cutting-edge water purification system designed to effectively remove microplastics from water. It uses reverse osmosis, semi-permeable membranes, and organosilanes, which are compounds that chemically fix the microplastics by forming a solid hybrid silica. The purification system contains a sensor that detects the presence of microplastics. If these particles are detected, the mechanism triggers the release of organosilanes in accurate amounts based on the concentration of microplastics on the semi-permeable membranes. At the start, the water intake pump is closed to allow the organosilanes to interact with the microplastic. After one minute, a high speed suction process collects both the microplastics and organosilanes. Then, the intake pump is opened to resume water filtration. In accordance with the water intake pump, a separate pump continuously expels the purified water. The semi-permeable membranes ensure that neither microplastics nor organosilanes pass through, and the reverse osmotic process pushes the water through these membranes, ensuring no water is left behind. Additionally, our system is powered by solar energy to enhance both scalability and adaptability. Using solar energy reduces maintenance costs and allows the system to be incorporated in remote locations where normal power sources are not available.
            </p>

            <h3>Research</h3>
            <p>
                Microplastics are detrimental to the environment, by harming wildlife through ingestion, and posing negative impacts on water quality. To address these problems, various techniques and compounds have been used, including sand filtration, activated carbon filtration, and membrane filtration. There are various issues associated with these processes mainly being scalability and efficiency. For example, sand filtration mainly filters larger particles, so it is not effective with removing small microplastics. Our innovative approach corrects these imperfections in a unique way by integrating organosilanes into a water purification system.
            </p>
        </div>
    );
}
