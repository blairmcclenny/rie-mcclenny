import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './footer.module.scss'

const Footer = () => {
  const networks = [
    { icon: 'instagram', link: 'https://www.instagram.com/thedessertsnob', },
    { icon: 'youtube', link: 'https://www.youtube.com/channel/UCjx1Y3YRVDTv1Q3-KsztDSA', },
    { icon: 'facebook-f', link: 'https://www.facebook.com/pages/category/Video-Creator/Rie-McClenny-2125130754437486/', }
  ]

  return (
    <footer className={styles.footer}>
      <ul>
        {
          networks.map((network, i) => (
            <li key={i}>
              <a href={network.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', network.icon]} fixedWidth />
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}

export default Footer
