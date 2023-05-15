import About from './About/About'
import Deposits from './Deposits/Deposits'
import General from './General/General'
import Started from './Started/Started'


export default function Accordions() {
    return (
        <div>
            <General/>
            <Started/>
            <Deposits/>
            <About/>
        </div>
    )
}