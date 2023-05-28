

import React from 'react'
import { Dashed } from '../../globalStyles'
import './HugStyle.css';
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css"
export const Hug = () => {
  return (
    <Dashed className='hug__section'>
      <Video autoPlay loop className="videoHug">
        <source src='https://moneyblinkswallets3125742-pre.s3.us-east-1.amazonaws.com/VIDEO%20INSTITUCIONAL%205.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMSJHMEUCIQDDpZMYo3YqELGkFzMn1iybGHvqyRETJLtIMgbi0p60UgIgV9L4OJAjoDkZxaqRwFzrgPhMZWTtq4vHrWEVdPSGk3cq8AMIZxACGgw2NjQ1ODAxNTE4NDMiDPf4UMKm9piMPHnCTCrNA57kmyGrtzSgxOIPlnS7MYGoCAMFnHSzHoTkYS6mOGwhpBND%2FGlLPp0iGOeiy2H4MAMvkd0qGQOIy3cqOhpZ1Q21Zx8evs6PRTrvz2YKmNIOXM3eagzyaWCZ%2BtOP2Ihqfe9dpW4tYyVHFlJ1SNSHc3I8SRxLExZC1w8XVzTbjI1jUDaSifv%2FYT5SelvB4KvRWQ27tv2iXWeLriZk9MDS6lH0JZXFJ5dTxago%2B3PiVTj3kYUZ80N3BpQ%2FisY9Qvz51y2iSARuvhWDc0UVvgHwGhTfE0qYWGdx51MZOhoOsOXitq%2FUM3FcO4aC%2FXUMKixKFG7LENEiGizn0GwXVasysQ8l6GyQv8g2tFI67w%2F9RqcHJgMrZQq31HXXMkPe0%2F4irtS56m6rw%2FIa2Gtnzlvx8GWKcLAIVMgnLRqA%2B7IDWNNvo7Fc4of5YFiH3p%2Bw9WoaQlYQOHi0FvO6ECA6cTlXXj3RAEd0TKAmaoCLtlqNmqHKZXAfbXAqyAXnn7XKE3JJWZrYRoHXW51igJs47p7aCOQjyIfUzt9B%2FlAamr3HRicB9IysR%2F7pnIcFE2uiVv3nVi1GDwAKx0lh8lfS5Sk8twapje8oIOLha43p12uRMJ2mz6MGOpQC62ZGA3%2FrC7P7WVApa9jjbwv3ZtatC19Hyr9PgCJecciQVgJV9RpfrtMfs1l8%2F%2FXqW9yPx2O11oG8c5b65Y7IC86YTDpQrBrter2MhO4KYGlO3df%2BIBNnu67l%2BGUzVxyXWdS3aNHJwNfyNiE6b9CttsgikiygACh%2Bzqq%2F5U2ZY0yayBPgtGXyNbhlAg1HCyjbolHiQ%2FK9U54e26fSvdL5S4zSVN9QlZ%2FRU9MXY02afd%2BKyF8WNeb22%2FXWO8YjtF2nz2TN5rl1IU7h3iaXPl92V5CJ3AkpL%2F4U%2FRqdKCvXTCJsXcc6nmqZ7FMJ3sHOSrsWCl517l5z4pM48dtGztxHIzKtGN0bsb5Teti6H2dwv49lKnhj&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230528T221917Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZVPAQLIRXCJ4EMET%2F20230528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b15780d2063af0c5472a18a29e58a8a4d4549c3f6c0a62657b654ccbb44d4c02' type='video/webm'></source>
      </Video>
    </Dashed>
  )
}
