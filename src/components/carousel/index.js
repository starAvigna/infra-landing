import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import Silder2 from '../../assets/Kuliza.png'
import Silder1 from '../../assets/Cloudcomrade.png'
import Silder3 from '../../assets/axcess.png'
import Silder4 from '../../assets/TGA.png'
import Silder5 from '../../assets/Kumolus.png'
import Silder6 from '../../assets/Iscale.png'
import Testimonials from '../testimonial'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Testimonials
        img_path={Silder1}
          content={
            'InfraGuard allows us to comply betterwith ISO cretification requirements and cloud platform provide best practices by giving us greater control over compliance and process automation. InfraGuard builds trust between our customers and Cloud Comrade as we are able to deliver managed services in a far more secure manner on Cloud than many companies cloud ever dream of having on-premise'
          }
          author={'Andy Waroma, Co-founder'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Testimonials
        img_path={Silder2}
          content={
            'Operating in the Financial Industry, security is paramount to us. Our software installations needed to remain updated while retaining our internal and external security policies. InfraGuard’s Patch Management solution in conjunction with their other features worked great in this scenario.'
          }
          author={'Kaushal Sarda, CEO'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Testimonials
        img_path={Silder3}
          content={
            'InfraGuard allows us to scale faster with new clients. Their single-view, multi-functional dashboard is easy to train on and ensures proper Role Based server access while deploying enhanced automation for standard processes.'
          }
          author={'Prakash Kumar, CEO'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Testimonials
        img_path={Silder4}
          content={
            'Our Global Cloud Cost Optimisation, Compliance, Security and Governance clients often had server-specific actions that could be automated. Integrating with InfraGuard API meant that we could service those clients right from our dashboard'
          }
          author={' Michael Salleo, Co-Founder and CTO'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Testimonials
        img_path={Silder5}
          content={
            'InfraGuard allows us to scale faster with new clients. Their single-view, multi-functional dashboard is easy to train on and ensures proper Role Based server access while deploying enhanced automation for standard processes.'
          }
          author={'Prakash Kumar, CEO'}
        />
      </Carousel.Item>
      
    </Carousel>
  )
}

export default UncontrolledExample
