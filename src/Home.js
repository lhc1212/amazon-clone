import Banner from "./Components/Banner";
import Product from "./Components/Product";
import iPhoneMini from "./Product Images/Apple iPhone 12 Mini.png"
import SamsungTv from "./Product Images/Samsung TV.png"
import Alexa from "./Product Images/Alexa.png"
import Kindle from "./Product Images/Kindle.png"
import SkullcandyAirpods from "./Product Images/Skullcandy Airpods.png"
import iPods from "./Product Images/iPods.png"
import iPhone11ProMax from "./Product Images/iPhone 11 Pro Max.png"
import iPhoneX from "./Product Images/iPhoneX.png"
import SamsungS21 from "./Product Images/Samsung Galaxy S21.png"
import SamsungS20 from "./Product Images/Galaxy S20.png"
import SamsungA51 from "./Product Images/Galaxy A51.png"
import MacAir from "./Product Images/Mac Air.png"
import MacPro from "./Product Images/MacPro.png"
import Windows10 from "./Product Images/Windows 10.png"
import SamsungMonitor from "./Product Images/Samsung Monitor.png"
import CurvedMonitor from "./Product Images/CurvedMonitor.png"

function Home() {
    return (
        <div>
            <Banner />

            <div className="productRow">
                <Product
                    id="81000148"
                    title="SAMSUNG QN32Q50RAFXZA Flat 32' QLED 4K 32Q50 Series Smart TV (2019 model)"
                    price={497.99}
                    image={SamsungTv}
                    rating={5}
                />
            </div>

            <div className="productRow">
                <Product
                    id="75795366"
                    title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                    price={399.99}
                    image={Alexa}
                    rating={5}
                />
                <Product
                    id="45585233"
                    title="Certified Refurbished Kindle - Now with a Built-in Front Light - Black - Ad-Supported"
                    price={79.99}
                    image={Kindle}
                    rating={5}
                />
            </div>

            <div className="productRow">
                <Product
                    id="72305094"
                    title="Skullcandy Dime True Wireless in-Ear Earbud - True Black"
                    price={24.99}
                    image={SkullcandyAirpods}
                    rating={4}
                />
                <Product
                    id="99923828"
                    title="Apple AirPods Pro"
                    price={169.99}
                    image={iPods}
                    rating={5}
                />
            </div>

            <div className="productRow">
                <Product
                    id="99686849"
                    title="Apple iPhone 12 Mini, 64GB, Blue - Fully Unlocked"
                    price={699.99}
                    image={iPhoneMini}
                    rating={5}
                />
                <Product
                    id="06088170"
                    title="Apple iPhone 11 Pro Max, 256GB, Space Gray - Fully Unlocked"
                    price={827.73}
                    image={iPhone11ProMax}
                    rating={5}
                />
                <Product
                    id="75691585"
                    title="Apple iPhone X, 256GB, Silver - For GSM"
                    price={419.95}
                    image={iPhoneX}
                    rating={4}
                />
            </div>

            <div className="productRow">
                <Product
                    id="04203746"
                    title="Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom White (SM-G991UZWAXAA)"
                    price={699.99}
                    image={SamsungS21}
                    rating={5}
                />
                <Product
                    id="06011223"
                    title="Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Orange"
                    price={599.99}
                    image={SamsungS20}
                    rating={4}
                />
                <Product
                    id="52237830"
                    title="Samsung Galaxy A51 Factory Unlocked Cell Phone | 128GB of Storage | Long Lasting Battery | Single SIM | GSM or CDMA Compatible | US Version | Black"
                    price={399.99}
                    image={SamsungA51}
                    rating={4}
                />
            </div>

            <div className="productRow">
                <Product
                    id="04192194"
                    title="2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Gold"
                    price={1004.66}
                    image={MacAir}
                    rating={5}
                />
                <Product
                    id="50781464"
                    title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
                    price={1288.04}
                    image={MacPro}
                    rating={5}
                />
                <Product
                    id="24550193"
                    title="Lenovo ThinkPad E15 20RD005GUS 15.6' Notebook - 1920 x 1080 - 8 GB RAM - Black - Windows 10 Pro 64-bit - Intel UHD Graphics - in-Plane Switching (IPS)"
                    price={785.99}
                    image={Windows10}
                    rating={3}
                />
            </div>

            <div className="productRow">
                <Product
                    id="29455958"
                    title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC32G55TQWNXZA), Black"
                    price={349.99}
                    image={SamsungMonitor}
                    rating={5}
                />
            </div>

            <div className="productRow">
                <Product
                    id="66419152"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    image={CurvedMonitor}
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home