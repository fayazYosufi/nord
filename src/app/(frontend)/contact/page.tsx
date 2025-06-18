import React from 'react'
import { useMyContext } from '../theContext'

const Contact = () => {
  const { apiURL } = useMyContext()
  return (
    <div className="page">
      <img src="/media/homeNew.PNG" alt="img" />
      <img src="./media/homeNew.PNG" alt="img" />
      <img src="../media/homeNew.PNG" alt="img" />
      <img src="../../media/homeNew.PNG" alt="img" />
      <img src="../../../media/homeNew.PNG" alt="img" />
      <img src="../../../../media/homeNew.PNG" alt="img" />
      <img src="../../../../../media/homeNew.PNG" alt="img" />

      <img src={`${apiURL.replace('/api', '')}/media/homeNew.PNG`} alt="img" />
      <img src={`${apiURL.replace('/api', '')}/media/file/homeNew.PNG`} alt="img" />

      <h1>Contacts</h1>
    </div>
  )
}

export default Contact
