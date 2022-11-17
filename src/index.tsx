import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import App from 'App'

const Root: FC = () => {
    return <App />
}

const container = document.getElementById('root')!

createRoot(container).render(<Root />)
