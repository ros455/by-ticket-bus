import React, { useState } from 'react';

const BusTest = () => {

    const [active, setActive] = useState('')
    const [curentSeats, setCurentSeats] = useState([])

    const hendler = (e) =>{
        if (curentSeats.includes(e.target.id)) {
            const updatedSeats = curentSeats.filter((seat) => seat !== e.target.id);
            setCurentSeats(updatedSeats);
          } else {
            setCurentSeats([...curentSeats, e.target.id]);
          }
    }

    console.log('number',curentSeats);

    return (
<svg width="802" height="1796" viewBox="0 0 802 1796" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_191_372)">
<rect x="15" y="9" width="772" height="1766" rx="20" fill="white"/>
<rect x="15.5" y="9.5" width="771" height="1765" rx="19.5" stroke="black"/>
</g>
<rect x="36" y="24" width="730" height="1736" rx="11" fill="white" stroke="black"/>
<rect x="88.5" y="78.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="94.5" y="198.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>

<rect 
    onClick={(e) => hendler(e)}
    className={curentSeats.includes('1') ? 'active' : 'non-active'}
    id='1'
    x="86.5" y="246.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect 
    className={curentSeats.includes('1') ? 'active' : 'non-active'}
    x="92.5" y="366.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>

<rect
    onClick={(e) => hendler(e)}
    className={curentSeats.includes('2') ? 'active' : 'non-active'}
    id='2'
    x="216.5" y="246.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect 
    className={curentSeats.includes('2') ? 'active' : 'non-active'}
    x="222.5" y="366.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>

<rect 
    onClick={(e) => hendler(e)}
    className={curentSeats.includes('3') ? 'active' : 'non-active'  }
    id='3'
    x="473.5" y="246.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect 
    className={curentSeats.includes('3') ? 'active' : 'non-active'}
    x="479.5" y="366.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="246.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="366.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="414.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="534.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>


<rect 
    onClick={(e) => hendler(e)}
    className={curentSeats.includes('6') ? 'active' : ''}
    id='6'
    x="216.5" y="414.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect 
    className={curentSeats.includes('6') ? 'active' : ''}
    x="222.5" y="534.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>


<rect 
    onClick={(e) => hendler(e)}
    className={curentSeats.includes('7') ? 'active' : ''}
    id='7' x="473.5" y="414.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect 
    className={curentSeats.includes('7') ? 'active' : ''}
    x="479.5" y="534.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>


<rect x="603.5" y="414.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="534.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="473.5" y="582.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="479.5" y="702.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="582.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="702.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="582.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="702.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="582.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="702.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="473.5" y="750.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="479.5" y="870.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="750.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="870.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="750.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="870.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="750.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="870.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="918.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="1038.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="918.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="1038.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="1086.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="1206.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="1086.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="1206.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="473.5" y="1086.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="479.5" y="1206.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="1086.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="1206.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="1254.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="1374.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="1254.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="1374.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="473.5" y="1254.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="479.5" y="1374.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="1254.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="1374.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="1422.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="1542.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="1422.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="1542.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="473.5" y="1422.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="479.5" y="1542.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="1422.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="1542.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="343.5" y="1590.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="349.5" y="1710.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="86.5" y="1590.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="92.5" y="1710.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="216.5" y="1590.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="222.5" y="1710.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="473.5" y="1590.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="479.5" y="1710.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<rect x="603.5" y="1590.5" width="109" height="123" rx="21.5" fill="#EF395A" stroke="black"/>
<rect x="609.5" y="1710.5" width="98" height="17" rx="3.5" fill="#EF395A" stroke="black"/>
<g clip-path="url(#clip0_191_372)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M143 49.8333C161.87 49.8333 177.167 65.1297 177.167 84C177.167 102.87 161.87 118.167 143 118.167C124.13 118.167 108.833 102.87 108.833 84C108.833 65.1297 124.13 49.8333 143 49.8333ZM116.367 90.1841C117.563 95.3173 120.215 99.996 124.006 103.658C127.796 107.32 132.564 109.81 137.735 110.828C137.076 101.859 134.127 96.4776 130.403 93.5017C126.836 90.6488 121.998 89.5452 116.367 90.1807V90.1841ZM155.597 93.4983C151.873 96.4811 148.925 101.859 148.265 110.828C153.437 109.809 158.205 107.319 161.995 103.657C165.786 99.9939 168.438 95.3145 169.633 90.1807C164.002 89.5452 159.164 90.6488 155.597 93.5017V93.4983ZM143 56.6666C136.632 56.6675 130.464 58.891 125.56 62.9535C120.656 67.016 117.324 72.6627 116.138 78.9194L115.991 79.7667L123.542 78.2566C125.531 77.8602 127.42 76.8113 129.532 75.3866L131.161 74.2522C133.884 72.3184 137.92 70.3333 143 70.3333C147.742 70.3333 151.573 72.0621 154.275 73.8661L156.469 75.3866C158.314 76.6336 159.995 77.5903 161.717 78.0789L162.458 78.2566L170.009 79.7667C168.998 73.3295 165.722 67.4648 160.77 63.2295C155.818 58.9942 149.516 56.6668 143 56.6666Z" fill="black"/>
</g>
<rect x="729" y="908" width="47" height="163" fill="white"/>
<rect x="729" y="58" width="47" height="163" fill="white"/>
<path d="M661.523 1005V975.909H679.08V979.034H665.045V988.864H678.17V991.989H665.045V1001.88H679.307V1005H661.523ZM687.134 975.909L694.634 988.011H694.861L702.361 975.909H706.509L697.361 990.455L706.509 1005H702.361L694.861 993.125H694.634L687.134 1005H682.986L692.361 990.455L682.986 975.909H687.134ZM714.616 975.909V1005H711.093V975.909H714.616ZM720.088 979.034V975.909H741.906V979.034H732.759V1005H729.236V979.034H720.088Z" fill="black"/>
<path d="M646.523 155V125.909H664.08V129.034H650.045V138.864H663.17V141.989H650.045V151.875H664.307V155H646.523ZM672.134 125.909L679.634 138.011H679.861L687.361 125.909H691.509L682.361 140.455L691.509 155H687.361L679.861 143.125H679.634L672.134 155H667.986L677.361 140.455L667.986 125.909H672.134ZM699.616 125.909V155H696.093V125.909H699.616ZM705.088 129.034V125.909H726.906V129.034H717.759V155H714.236V129.034H705.088Z" fill="black"/>
<path 
    className={curentSeats.includes('1') ? '' : 'non-active-numb'} 
    d="M144.239 297.909V327H140.716V301.602H140.545L133.443 306.318V302.739L140.716 297.909H144.239Z" fill="black"/>
<path 
    className={curentSeats.includes('2') ? '' : 'non-active-numb'} 
    d="M262.011 327V324.443L271.614 313.932C272.741 312.701 273.669 311.631 274.398 310.722C275.127 309.803 275.667 308.941 276.017 308.136C276.377 307.322 276.557 306.47 276.557 305.58C276.557 304.557 276.311 303.671 275.818 302.923C275.335 302.175 274.672 301.598 273.83 301.19C272.987 300.783 272.04 300.58 270.989 300.58C269.871 300.58 268.896 300.812 268.062 301.276C267.239 301.73 266.599 302.369 266.145 303.193C265.7 304.017 265.477 304.983 265.477 306.091H262.125C262.125 304.386 262.518 302.89 263.304 301.602C264.09 300.314 265.16 299.311 266.514 298.591C267.878 297.871 269.407 297.511 271.102 297.511C272.807 297.511 274.317 297.871 275.634 298.591C276.95 299.311 277.982 300.281 278.73 301.503C279.478 302.724 279.852 304.083 279.852 305.58C279.852 306.65 279.658 307.696 279.27 308.719C278.891 309.732 278.228 310.864 277.281 312.114C276.344 313.354 275.042 314.869 273.375 316.659L266.841 323.648V323.875H280.364V327H262.011Z" fill="black"/>
<path 
    className={curentSeats.includes('3') ? '' : 'non-active-numb'} 
    d="M528.841 327.398C526.966 327.398 525.295 327.076 523.827 326.432C522.368 325.788 521.208 324.893 520.347 323.747C519.494 322.592 519.03 321.252 518.955 319.727H522.534C522.61 320.665 522.932 321.474 523.5 322.156C524.068 322.829 524.812 323.349 525.73 323.719C526.649 324.088 527.667 324.273 528.784 324.273C530.034 324.273 531.142 324.055 532.108 323.619C533.074 323.184 533.831 322.578 534.381 321.801C534.93 321.025 535.205 320.125 535.205 319.102C535.205 318.032 534.939 317.09 534.409 316.276C533.879 315.452 533.102 314.808 532.08 314.344C531.057 313.88 529.807 313.648 528.33 313.648H526V310.523H528.33C529.485 310.523 530.498 310.314 531.369 309.898C532.25 309.481 532.937 308.894 533.429 308.136C533.931 307.379 534.182 306.489 534.182 305.466C534.182 304.481 533.964 303.624 533.528 302.895C533.093 302.166 532.477 301.598 531.682 301.19C530.896 300.783 529.968 300.58 528.898 300.58C527.894 300.58 526.947 300.764 526.057 301.134C525.176 301.493 524.456 302.019 523.898 302.71C523.339 303.392 523.036 304.216 522.989 305.182H519.58C519.636 303.657 520.096 302.322 520.957 301.176C521.819 300.021 522.946 299.121 524.338 298.477C525.74 297.833 527.278 297.511 528.955 297.511C530.754 297.511 532.297 297.876 533.585 298.605C534.873 299.325 535.863 300.277 536.554 301.46C537.245 302.644 537.591 303.922 537.591 305.295C537.591 306.934 537.16 308.33 536.298 309.486C535.446 310.641 534.286 311.441 532.818 311.886V312.114C534.655 312.417 536.09 313.198 537.122 314.457C538.154 315.707 538.67 317.256 538.67 319.102C538.67 320.684 538.24 322.104 537.378 323.364C536.526 324.614 535.361 325.598 533.884 326.318C532.406 327.038 530.725 327.398 528.841 327.398Z" fill="black"/>
<path 
    className={curentSeats.includes('4') ? '' : 'non-active-numb'} 
    d="M648.33 321.034V318.136L661.114 297.909H663.216V302.398H661.795L652.136 317.682V317.909H669.352V321.034H648.33ZM662.023 327V320.153V318.804V297.909H665.375V327H662.023Z" fill="black"/>
<path 
    className={curentSeats.includes('5') ? '' : 'non-active-numb'} 
    d="M140.102 491.398C138.436 491.398 136.935 491.066 135.599 490.403C134.264 489.741 133.194 488.831 132.389 487.676C131.584 486.521 131.144 485.205 131.068 483.727H134.477C134.61 485.044 135.206 486.133 136.267 486.994C137.337 487.847 138.616 488.273 140.102 488.273C141.295 488.273 142.356 487.993 143.284 487.435C144.222 486.876 144.955 486.109 145.486 485.134C146.026 484.149 146.295 483.036 146.295 481.795C146.295 480.527 146.016 479.395 145.457 478.401C144.908 477.397 144.151 476.606 143.185 476.028C142.219 475.451 141.116 475.157 139.875 475.148C138.985 475.138 138.071 475.276 137.134 475.56C136.196 475.834 135.424 476.189 134.818 476.625L131.523 476.227L133.284 461.909H148.398V465.034H136.239L135.216 473.614H135.386C135.983 473.14 136.731 472.747 137.631 472.435C138.53 472.122 139.468 471.966 140.443 471.966C142.223 471.966 143.81 472.392 145.202 473.244C146.603 474.087 147.702 475.242 148.497 476.71C149.302 478.178 149.705 479.854 149.705 481.739C149.705 483.595 149.288 485.252 148.455 486.71C147.631 488.159 146.494 489.305 145.045 490.148C143.597 490.981 141.949 491.398 140.102 491.398Z" fill="black"/>
<path d="M270.67 491.398C269.477 491.379 268.284 491.152 267.091 490.716C265.898 490.28 264.809 489.546 263.824 488.514C262.839 487.473 262.048 486.066 261.452 484.295C260.855 482.515 260.557 480.28 260.557 477.591C260.557 475.015 260.798 472.733 261.281 470.744C261.764 468.746 262.465 467.065 263.384 465.702C264.302 464.329 265.41 463.287 266.707 462.577C268.014 461.866 269.487 461.511 271.125 461.511C272.754 461.511 274.203 461.838 275.472 462.491C276.75 463.135 277.792 464.035 278.597 465.19C279.402 466.346 279.922 467.676 280.159 469.182H276.693C276.371 467.875 275.746 466.791 274.818 465.929C273.89 465.067 272.659 464.636 271.125 464.636C268.871 464.636 267.096 465.616 265.798 467.577C264.51 469.537 263.862 472.288 263.852 475.83H264.08C264.61 475.025 265.24 474.338 265.969 473.77C266.707 473.192 267.522 472.747 268.412 472.435C269.302 472.122 270.244 471.966 271.239 471.966C272.905 471.966 274.43 472.383 275.812 473.216C277.195 474.04 278.303 475.181 279.136 476.639C279.97 478.088 280.386 479.75 280.386 481.625C280.386 483.424 279.984 485.072 279.179 486.568C278.374 488.055 277.242 489.239 275.784 490.119C274.335 490.991 272.631 491.417 270.67 491.398ZM270.67 488.273C271.864 488.273 272.934 487.974 273.881 487.378C274.837 486.781 275.59 485.981 276.139 484.977C276.698 483.973 276.977 482.856 276.977 481.625C276.977 480.422 276.707 479.329 276.168 478.344C275.637 477.349 274.903 476.559 273.966 475.972C273.038 475.384 271.977 475.091 270.784 475.091C269.884 475.091 269.046 475.271 268.27 475.631C267.493 475.981 266.812 476.464 266.224 477.08C265.647 477.695 265.192 478.401 264.861 479.196C264.529 479.982 264.364 480.811 264.364 481.682C264.364 482.837 264.634 483.917 265.173 484.92C265.723 485.924 266.471 486.734 267.418 487.349C268.374 487.965 269.458 488.273 270.67 488.273Z" fill="black"/>
<path d="M519.92 491L532.932 465.261V465.034H517.932V461.909H536.568V465.205L523.614 491H519.92Z" fill="black"/>
<path d="M659.33 491.398C657.379 491.398 655.655 491.052 654.159 490.361C652.672 489.66 651.512 488.699 650.679 487.477C649.846 486.246 649.434 484.845 649.443 483.273C649.434 482.042 649.675 480.905 650.168 479.864C650.66 478.812 651.332 477.937 652.185 477.236C653.046 476.526 654.008 476.076 655.068 475.886V475.716C653.676 475.356 652.568 474.575 651.744 473.372C650.92 472.16 650.513 470.782 650.523 469.239C650.513 467.761 650.887 466.44 651.645 465.276C652.402 464.111 653.444 463.192 654.77 462.52C656.105 461.848 657.625 461.511 659.33 461.511C661.015 461.511 662.521 461.848 663.847 462.52C665.172 463.192 666.214 464.111 666.972 465.276C667.739 466.44 668.127 467.761 668.136 469.239C668.127 470.782 667.705 472.16 666.872 473.372C666.048 474.575 664.955 475.356 663.591 475.716V475.886C664.642 476.076 665.589 476.526 666.432 477.236C667.275 477.937 667.947 478.812 668.449 479.864C668.951 480.905 669.206 482.042 669.216 483.273C669.206 484.845 668.78 486.246 667.938 487.477C667.104 488.699 665.944 489.66 664.457 490.361C662.98 491.052 661.271 491.398 659.33 491.398ZM659.33 488.273C660.646 488.273 661.782 488.06 662.739 487.634C663.695 487.207 664.434 486.606 664.955 485.83C665.475 485.053 665.741 484.144 665.75 483.102C665.741 482.004 665.456 481.033 664.898 480.19C664.339 479.348 663.577 478.685 662.611 478.202C661.654 477.719 660.561 477.477 659.33 477.477C658.089 477.477 656.981 477.719 656.006 478.202C655.04 478.685 654.277 479.348 653.719 480.19C653.17 481.033 652.9 482.004 652.909 483.102C652.9 484.144 653.151 485.053 653.662 485.83C654.183 486.606 654.926 487.207 655.892 487.634C656.858 488.06 658.004 488.273 659.33 488.273ZM659.33 474.466C660.371 474.466 661.295 474.258 662.099 473.841C662.914 473.424 663.553 472.842 664.017 472.094C664.481 471.346 664.718 470.47 664.727 469.466C664.718 468.481 664.486 467.624 664.031 466.895C663.577 466.156 662.947 465.588 662.142 465.19C661.337 464.783 660.4 464.58 659.33 464.58C658.241 464.58 657.289 464.783 656.474 465.19C655.66 465.588 655.03 466.156 654.585 466.895C654.14 467.624 653.922 468.481 653.932 469.466C653.922 470.47 654.145 471.346 654.599 472.094C655.063 472.842 655.703 473.424 656.517 473.841C657.331 474.258 658.269 474.466 659.33 474.466Z" fill="black"/>
<defs>
<filter id="filter0_d_191_372" x="0" y="0" width="802" height="1796" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_191_372"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="8.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.77 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_372"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_372" result="shape"/>
</filter>
<clipPath id="clip0_191_372">
<rect width="82" height="82" fill="white" transform="translate(102 43)"/>
</clipPath>
</defs>
</svg>

    );
};

export default BusTest;