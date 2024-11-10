import React from 'react';
import PropTypes from 'prop-types';
import  styles from './cards.module.scss'

type cards = {
    cardName: string
}

const CardClick:React.FC<cards> = ({ cardName}) => {
    

    const dashBoardMainItems = [
      {id: 1, icons:
       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5530_2782)">
            <path d="M10.7809 13.9717L10.8295 14.0592C10.8282 14.0598 10.827 14.0605 10.8257 14.0611L10.7809 13.9717ZM10.7809 13.9717C10.8108 13.9567 10.8408 13.942 10.8707 13.9274L10.8683 13.9231L10.7809 13.9717ZM19.2882 13.4376L19.2877 13.4374C18.6974 13.1973 18.2366 13.0011 17.9162 12.7334C17.6117 12.4789 17.4326 12.1579 17.4084 11.6562C17.6451 11.3531 17.7986 10.9771 17.8978 10.6431C17.9958 10.3135 18.0427 10.0182 18.0633 9.86117C18.4558 9.2465 18.6135 8.6202 18.5473 8.18821C18.8775 7.39117 18.6457 6.74349 18.4261 6.23023C18.2437 5.79194 18.1121 5.42115 18.2809 4.94649L18.3906 4.65426L18.421 4.57334L18.3453 4.53157L18.0153 4.34938L18.0154 4.34919L18.0094 4.34639C16.8165 3.78708 15.4665 3.70846 14.4811 4.12481L14.4811 4.12474L14.4774 4.12644C13.8423 4.42519 13.3485 4.91218 13.1145 5.58762C12.7367 5.90253 12.5609 6.36163 12.5005 6.82113C12.4402 7.27953 12.4932 7.7492 12.5839 8.105C12.478 8.5783 12.6742 9.21148 13.0676 9.826C13.0882 9.98263 13.1351 10.2779 13.2331 10.6076C13.3321 10.9411 13.4853 11.3166 13.7213 11.6195C13.6803 12.1225 13.5005 12.4442 13.2003 12.6986C12.8846 12.9661 12.433 13.1623 11.8432 13.4021L11.8273 13.4085C11.4663 13.5531 11.1018 13.699 10.7361 13.8823L10.6428 13.9291L10.6935 14.0203L11.0604 14.6803L11.109 14.7676L11.1964 14.7192C11.4106 14.6004 11.6199 14.5151 11.8355 14.4273C11.9469 14.3819 12.06 14.3358 12.1762 14.2841C12.7413 14.0654 13.3623 13.8217 13.8399 13.4056C14.3245 12.9835 14.6578 12.3878 14.6578 11.4787V11.3317V11.2903L14.6286 11.261L14.5186 11.151C14.3348 10.9672 14.2032 10.6748 14.1177 10.3824C14.0326 10.0915 13.9978 9.81684 13.9978 9.68174V9.57173V9.54788L13.9871 9.52659L13.9501 9.45355L13.9508 9.45322L13.9441 9.44322C13.729 9.12054 13.6145 8.85478 13.5581 8.65967C13.5299 8.56202 13.5164 8.48287 13.5119 8.4237C13.5077 8.3698 13.5115 8.33824 13.5144 8.32518L13.5835 8.18625L13.5999 8.15317L13.5909 8.11735L13.554 7.97039L13.5542 7.97033L13.5519 7.9632C13.4649 7.70201 13.4206 7.3406 13.4558 7.00622C13.4913 6.66817 13.6048 6.38458 13.8062 6.24447L13.9153 6.172L13.9476 6.1506L13.957 6.11308L13.9936 5.96773C14.1331 5.48177 14.4069 5.14055 14.8894 4.93365L14.8895 4.93371L14.8928 4.93212C15.5387 4.62633 16.4281 4.64712 17.2688 4.97766C17.1823 5.59108 17.3669 6.06781 17.5437 6.4909C17.5559 6.52513 17.568 6.55866 17.5799 6.59158C17.7489 7.05943 17.8734 7.40387 17.6218 7.87462L17.6213 7.87432L17.6172 7.88468L17.5441 8.06773L17.5275 8.10926L17.5474 8.14931L17.6185 8.29222C17.6188 8.29411 17.6196 8.29839 17.6202 8.30577C17.6214 8.32076 17.6216 8.34271 17.6196 8.37184C17.6155 8.42988 17.603 8.51079 17.5767 8.6114C17.5245 8.81183 17.4188 9.08629 17.223 9.40748L17.1505 9.51365L17.1331 9.53916V9.57003V9.67374C17.1144 9.82135 17.0783 10.0957 16.999 10.3821C16.9178 10.6755 16.7951 10.9666 16.6124 11.1493L16.5024 11.2593L16.4731 11.2886V11.33V11.477C16.4731 12.3861 16.8065 12.9818 17.291 13.4039C17.7693 13.8206 18.3913 14.0644 18.957 14.2833C19.5285 14.5045 20.0441 14.71 20.4373 15.0368C20.8038 15.3416 21.0671 15.7552 21.1538 16.4H14.667H14.567V16.5V17.2331V17.3331H14.667H22H22.1V17.2331V16.8661C22.1 15.7212 21.7041 14.9794 21.1466 14.4649C20.595 13.9558 19.8906 13.675 19.2882 13.4376Z" fill="#DF18FF" stroke="#DF18FF" stroke-width="0.2"/>
            <path d="M7.22392 4.52085C6.14637 4.52085 5.53815 5.03195 5.22969 5.33764C4.2622 5.58717 3.75817 6.12827 3.49683 6.77942C3.24049 7.41807 3.21981 8.1586 3.20167 8.80797L3.20094 8.83421C3.20094 8.83435 3.20093 8.83448 3.20093 8.83462C3.18236 9.35064 3.16407 9.83441 3.06168 10.2485C2.96036 10.6584 2.77923 10.9889 2.4423 11.209L2.11541 11.3904L2.02052 11.443L2.08071 11.5333L2.3007 11.8633C2.81691 12.638 3.96456 13.3622 5.15284 13.7086C4.74433 14.862 3.75589 15.2426 2.68054 15.6366C2.04187 15.855 1.34551 16.0982 0.811165 16.5472C0.269578 17.0023 -0.1 17.6633 -0.1 18.7V19.0669V19.1669H0H13.933H14.033V19.0669V18.7C14.033 17.6633 13.6635 17.0025 13.127 16.5474C12.5974 16.0982 11.9104 15.8547 11.2908 15.6359C11.2748 15.63 11.2589 15.6242 11.243 15.6183C10.1834 15.2304 9.21975 14.8775 8.81722 13.708C10.0058 13.3617 11.153 12.6373 11.6701 11.8624L11.6702 11.8624L11.8902 11.5324L11.9504 11.4421L11.8555 11.3895L11.528 11.2078C11.2099 11.0059 11.0004 10.6481 10.8478 10.1812C10.695 9.71363 10.6045 9.15366 10.5127 8.56543L10.5126 8.56442C10.5081 8.53789 10.5037 8.51124 10.4993 8.48447C10.3571 7.62867 10.1955 6.65602 9.75846 5.89124C9.53166 5.49434 9.22924 5.15024 8.81487 4.90596C8.40045 4.66164 7.88033 4.52085 7.22392 4.52085ZM13.0804 18.233H0.885611C0.972968 17.723 1.21322 17.4009 1.55226 17.1586C1.89855 16.9112 2.34679 16.7471 2.85636 16.5606C2.8931 16.5472 2.93015 16.5336 2.96751 16.5199L2.96788 16.5198C2.98244 16.5144 2.99702 16.509 3.01163 16.5035C3.63804 16.2708 4.31282 16.0201 4.88621 15.5843C5.47744 15.135 5.95844 14.4914 6.1837 13.4777L6.18372 13.4778L6.18415 13.4756L6.2572 13.1086L6.27672 13.0105L6.17865 12.991L5.81169 12.918L5.81169 12.918L5.81035 12.9177C4.87991 12.7457 3.88295 12.2081 3.33135 11.6619C3.6876 11.3065 3.87773 10.8643 3.9834 10.3976C4.09456 9.90659 4.1137 9.38085 4.13149 8.89253L4.1321 8.87577H4.13211L4.13214 8.87459C4.1507 8.11934 4.1882 7.52532 4.38069 7.08331C4.47559 6.86541 4.60774 6.68607 4.79419 6.54352C4.98132 6.40045 5.22786 6.29085 5.55633 6.21987L5.55646 6.22048L5.56705 6.21692L5.67705 6.17997L5.69931 6.17249L5.71592 6.15589L5.78896 6.08284L5.78946 6.08234C6.04114 5.83066 6.41967 5.45213 7.22129 5.45213C7.65914 5.45213 7.99995 5.52809 8.27152 5.66846C8.54227 5.8084 8.75076 6.01572 8.91924 6.2893C9.26016 6.84286 9.43195 7.65661 9.6157 8.70562C9.70696 9.27246 9.79964 9.84743 9.95778 10.3681C10.106 10.8563 10.3138 11.3042 10.6385 11.6585C10.0876 12.2059 9.0885 12.7445 8.15606 12.9177L8.15481 12.918L7.78785 12.991L7.68977 13.0105L7.7093 13.1086L7.78234 13.4756L7.78243 13.476C7.98903 14.491 8.47062 15.1351 9.06674 15.5845C9.63655 16.0141 10.3094 16.2639 10.9286 16.4938C10.952 16.5025 10.9754 16.5111 10.9986 16.5198L10.9991 16.5199L11.0071 16.5229C11.5578 16.7247 12.0443 16.9029 12.4139 17.1714C12.7533 17.4178 12.993 17.74 13.0804 18.233Z" fill="#DF18FF" stroke="#DF18FF" stroke-width="0.2"/>
            </g>
            <defs>
            <clipPath id="clip0_5530_2782">
            <rect width="22" height="22" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        , CardName: "USERS", numbers: '2,453' },
      {id: 2, icons: 
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.40876 17.7755L4.40878 17.7753C4.2427 17.7637 4.10507 17.6935 4.01017 17.5773C3.93547 17.4858 3.89111 17.3707 3.87616 17.243H3.86763V17.143C3.86763 15.8381 4.2137 14.6162 4.81335 13.5614H1.43539C1.26471 13.5614 1.11848 13.4984 1.01507 13.3838C0.912837 13.2704 0.85955 13.1146 0.856345 12.9395M4.40876 17.7755L0.956323 12.9373M4.40876 17.7755L4.41574 17.7755L17.5545 17.7784C17.8752 17.7784 18.1335 17.5188 18.1335 17.1993C18.1335 15.9325 17.7596 14.6106 17.1652 13.5615L20.5639 13.5606C20.8846 13.5606 21.143 13.301 21.143 12.9815L21.143 12.9803C21.1124 10.5787 19.7611 8.54781 17.642 7.67851C18.786 6.95121 19.5184 5.67431 19.5184 4.25897C19.5184 0.796036 15.468 -1.03867 12.9041 1.20528C11.6926 0.706119 10.3069 0.706116 9.09542 1.20528C8.3769 0.576855 7.45379 0.222467 6.48189 0.222467C2.45243 0.222467 0.995241 5.57355 4.35675 7.68005M4.40876 17.7755L4.58344 7.69863C4.54585 7.67739 4.50882 7.65576 4.47235 7.63375C4.43362 7.64875 4.39508 7.66418 4.35675 7.68005M0.856345 12.9395C0.856343 12.9394 0.856341 12.9393 0.856339 12.9391L0.956323 12.9373M0.856345 12.9395C0.856348 12.9396 0.856351 12.9397 0.856353 12.9398L0.956323 12.9373M0.856345 12.9395C0.80084 10.6744 2.27898 8.54032 4.35675 7.68005M0.956323 12.9373C0.901131 10.691 2.38568 8.57118 4.46325 7.74475C4.42723 7.72354 4.39173 7.70197 4.35675 7.68005M4.98763 13.4614H4.87125L4.92864 13.5614C4.94804 13.5279 4.96771 13.4946 4.98763 13.4614ZM17.5289 2.2208L17.529 2.22083C19.2108 3.91955 18.1948 6.83041 15.877 7.11796C16.3723 5.11422 15.6089 3.03533 13.9941 1.82705C15.1109 1.10957 16.5822 1.26358 17.5289 2.2208ZM6.12476 7.11767C4.71237 6.93785 3.64026 5.71877 3.64026 4.2608C3.64026 1.96075 6.14996 0.626447 8.00796 1.82696C6.39303 3.03507 5.62969 5.11381 6.12476 7.11767ZM14.4988 7.53981C13.1179 10.541 8.88195 10.5437 7.50112 7.53988C6.27847 4.87711 8.24229 1.98947 10.989 1.98904C13.9024 2.02526 15.6822 4.96716 14.4988 7.53981ZM2.0459 12.4043C2.31215 10.0953 4.28099 8.34345 6.6465 8.41985C7.11463 9.23527 7.80133 9.91068 8.63053 10.3566C7.46485 10.7713 6.43557 11.482 5.63465 12.4042L2.0459 12.4043ZM16.3445 12.4042C15.5465 11.4875 14.5226 10.7755 13.3622 10.3621C14.1946 9.91413 14.8858 9.2383 15.356 8.4198C17.7215 8.34338 19.6905 10.0943 19.9566 12.4042H16.3445ZM5.04793 16.6202C5.16912 15.1942 5.80652 13.8488 6.77177 12.8727C10.381 9.22483 16.5119 11.5852 16.9316 16.6202H5.04793Z" fill="#5718FF" stroke="#5718FF" stroke-width="0.2"/>
            <path d="M12.2471 6.79774L12.2395 6.81237C11.7073 7.81758 10.2757 7.81072 9.75087 6.79791C9.6665 6.6342 9.53676 6.53764 9.39242 6.50168C9.25055 6.46634 9.10191 6.49121 8.97735 6.55535C8.8528 6.61949 8.7462 6.72605 8.69256 6.86213C8.63799 7.00061 8.64128 7.16245 8.72562 7.32643L8.72568 7.32656C9.68163 9.17903 12.32 9.17911 13.275 7.32652C13.3596 7.16254 13.3631 7.00062 13.3085 6.86202C13.2548 6.72582 13.1481 6.61917 13.0233 6.55498C12.8985 6.49079 12.7495 6.46592 12.6073 6.50127C12.4625 6.53724 12.3322 6.63383 12.2471 6.79774ZM13.1861 7.2807C12.2683 9.06102 9.73326 9.06102 8.81455 7.2807L12.4019 6.74383C12.7353 6.3458 13.4544 6.7607 13.1861 7.2807Z" fill="#5718FF" stroke="#5718FF" stroke-width="0.2"/>
        </svg>

        , CardName: "ACTIVE USERS", numbers: '2,453'},
      {id: 3, icons: 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.96167 0.400011V16.4118H8.31567V15.2118H3.16167V1.60001H9.19987V5.95781H13.3155V9.65381H14.5155V4.92561L10.0881 0.399811L1.96167 0.400011ZM10.3999 2.43601L12.6741 4.75781H10.3999V2.43601Z" fill="#F55F44"/>
            <path d="M4.3938 8.35242H11.604V9.55242H4.3938V8.35242Z" fill="#F55F44"/>
            <path d="M4.3938 10.9524H8.004V12.1524H4.3938V10.9524Z" fill="#F55F44"/>
            <path d="M18.0381 17.9422V12.4C18.0381 10.7719 14.1921 10.7258 13.7537 10.7258C13.3154 10.7258 9.47168 10.7758 9.47168 12.4V17.9796C9.47246 18.0406 9.48262 18.1007 9.50215 18.1577C9.84355 19.5601 13.3381 19.5999 13.7561 19.5999C14.1741 19.5999 17.9561 19.5523 18.0357 17.9741C18.0357 17.9656 18.0381 17.9562 18.0381 17.9421L18.0381 17.9422ZM16.8381 14.1422C16.5998 14.3618 15.4998 14.7203 13.7561 14.7203C12.0115 14.7203 10.9201 14.3617 10.6717 14.15V13.6344C11.8396 14.0602 13.4717 14.0782 13.7561 14.0782C14.0405 14.0782 15.6717 14.0578 16.8405 13.6344L16.8381 14.1422ZM10.6717 15.4758C11.8396 15.9016 13.4717 15.9196 13.7561 15.9196C14.0405 15.9196 15.6717 15.8993 16.8405 15.4758L16.8397 16C16.592 16.2118 15.4999 16.5704 13.7553 16.5704C12.0115 16.5704 10.9201 16.2 10.6717 16L10.6717 15.4758ZM13.7561 11.9298C15.2561 11.9298 16.2741 12.1954 16.6881 12.404C16.274 12.604 15.256 12.8783 13.7561 12.8783C12.2561 12.8783 11.2357 12.6142 10.8241 12.4001C11.2358 12.2001 12.2538 11.9298 13.7561 11.9298ZM10.6717 17.8344V17.318C11.8396 17.7438 13.4717 17.7618 13.7561 17.7618C14.0405 17.7618 15.6717 17.7415 16.8405 17.318V17.8336C16.5897 18.0461 15.4999 18.4 13.7561 18.4C12.0115 18.4 10.9201 18.0461 10.6717 17.8344Z" fill="#F55F44"/>
        </svg>


        , CardName: "USERS WITH LOANS", numbers: '12,453' },
      {id: 4, icons: 
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5530_2742)">
            <path d="M16.6002 2.25C16.6002 1.52193 16.0002 0.934328 15.1059 0.534069C14.2049 0.130866 12.9713 -0.1 11.6248 -0.1C10.2786 -0.1 9.04511 0.130867 8.14429 0.534071C7.25004 0.93433 6.65 1.52193 6.65 2.25C6.65 2.97807 7.25004 3.56567 8.14429 3.96593C9.04511 4.36913 10.2786 4.6 11.6248 4.6C12.9713 4.6 14.2049 4.36913 15.1059 3.96593C16.0002 3.56567 16.6002 2.97807 16.6002 2.25ZM7.60024 2.25C7.60024 2.10802 7.68874 1.94724 7.88614 1.78025C8.08165 1.61485 8.37054 1.45542 8.7363 1.31648C9.46698 1.03894 10.4858 0.85024 11.6248 0.85024C12.7637 0.85024 13.7827 1.03894 14.5136 1.31649C14.8794 1.45543 15.1684 1.61487 15.364 1.78027C15.5615 1.94727 15.65 2.10804 15.65 2.25C15.65 2.39196 15.5615 2.55273 15.364 2.71974C15.1684 2.88513 14.8794 3.04457 14.5136 3.18351C13.7827 3.46106 12.7637 3.64976 11.6248 3.64976C10.4858 3.64976 9.46698 3.46106 8.7363 3.18351C8.37054 3.04457 8.08165 2.88514 7.88614 2.71975C7.68874 2.55275 7.60024 2.39198 7.60024 2.25Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M16.6002 2.25V2.15H16.5002H15.75H15.65V2.25V4.5C15.65 4.64197 15.5615 4.80274 15.364 4.96974C15.1684 5.13514 14.8794 5.29458 14.5136 5.43352C13.7827 5.71106 12.7637 5.89976 11.6248 5.89976C10.4858 5.89976 9.46698 5.71106 8.7363 5.43351C8.37054 5.29457 8.08165 5.13514 7.88614 4.96975C7.68874 4.80275 7.60024 4.64198 7.60024 4.5V2.25V2.15H7.50024H6.75H6.65V2.25V4.5C6.65 5.22807 7.25004 5.81567 8.14429 6.21593C9.04511 6.61913 10.2786 6.85 11.6248 6.85C12.9713 6.85 14.2049 6.61913 15.1059 6.21593C16.0002 5.81567 16.6002 5.22807 16.6002 4.5V2.25Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M6.65 6.75702V6.83833L6.7296 6.85491L6.72961 6.85491L6.73796 6.85665L6.74649 6.85695C7.00336 6.866 7.2532 6.8848 7.49323 6.91193L7.62051 6.92632L7.60358 6.79935C7.60133 6.78244 7.60024 6.76647 7.60024 6.74998V4.49998V4.39998H7.50024H6.75H6.65V4.49998V6.74998V6.75702ZM10.5015 8.94541L10.5045 9.04459C10.8651 9.08079 11.2404 9.09994 11.6248 9.09994C12.9713 9.09994 14.2049 8.86907 15.1059 8.46587C16.0002 8.06561 16.6002 7.47801 16.6002 6.74994V4.49994V4.39994H16.5002H15.75H15.65V4.49994V6.74994C15.65 6.89191 15.5615 7.05268 15.364 7.21968C15.1684 7.38508 14.8794 7.54452 14.5136 7.68345C13.7827 7.961 12.7637 8.1497 11.6248 8.1497C11.2361 8.1497 10.8616 8.12811 10.5068 8.08776L10.3795 8.07328L10.3964 8.20034C10.3987 8.21716 10.3998 8.23384 10.3998 8.2497C10.3998 8.31385 10.4054 8.56946 10.4146 8.9475L10.5015 8.94541Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M10.4708 11.1525L10.3094 11.2763L10.5626 11.3004C10.9055 11.3331 11.2609 11.3501 11.6247 11.3501C12.9712 11.3501 14.2049 11.1192 15.1058 10.716C16.0001 10.3158 16.6002 9.72816 16.6002 9.00009V6.75009V6.65009H16.5002H15.7499H15.6499V6.75009V9.00009C15.6499 9.14206 15.5614 9.30283 15.3639 9.46984C15.1684 9.63523 14.8794 9.79467 14.5135 9.93361C13.7827 10.2112 12.7637 10.3999 11.6247 10.3999C11.257 10.3999 10.9005 10.3803 10.5631 10.3442L10.4495 10.332L10.4525 10.4462C10.4544 10.5218 10.4564 10.5983 10.4584 10.6757C10.4624 10.8316 10.4665 10.9909 10.4708 11.1525ZM7.48926 6.91133L7.60024 6.92359V6.81194V6.75006V6.65006H7.50024H6.75H6.65V6.75006V6.75709V6.85361L6.74646 6.85703C7.0019 6.86608 7.24972 6.88487 7.48926 6.91133Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M11.35 9C11.35 8.27193 10.75 7.68433 9.85571 7.28407C8.95489 6.88087 7.72142 6.65 6.37524 6.65C5.02869 6.65 3.79505 6.88087 2.89414 7.28407C1.9998 7.68433 1.39976 8.27193 1.39976 9C1.39976 9.72807 1.9998 10.3157 2.89414 10.7159C3.79505 11.1191 5.02869 11.35 6.37524 11.35C7.72142 11.35 8.95489 11.1191 9.85571 10.7159C10.75 10.3157 11.35 9.72807 11.35 9ZM2.35 9C2.35 8.85803 2.43852 8.69726 2.636 8.53026C2.83158 8.36486 3.12055 8.20542 3.48641 8.06648C4.21728 7.78894 5.23625 7.60024 6.37524 7.60024C7.51422 7.60024 8.53301 7.78894 9.26369 8.06649C9.62946 8.20543 9.91834 8.36486 10.1139 8.53025C10.3113 8.69725 10.3998 8.85802 10.3998 9C10.3998 9.14198 10.3113 9.30275 10.1139 9.46975C9.91834 9.63514 9.62946 9.79457 9.26369 9.93351C8.53301 10.2111 7.51422 10.3998 6.37524 10.3998C5.23625 10.3998 4.21728 10.2111 3.48641 9.93351C3.12055 9.79457 2.83158 9.63513 2.636 9.46974C2.43852 9.30273 2.35 9.14196 2.35 9Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M11.35 9V8.9H11.25H10.4998H10.3998V9V11.25C10.3998 11.392 10.3113 11.5528 10.1139 11.7198C9.91834 11.8851 9.62946 12.0446 9.26369 12.1835C8.53301 12.4611 7.51422 12.6498 6.37524 12.6498C5.23625 12.6498 4.21728 12.4611 3.48641 12.1835C3.12055 12.0446 2.83158 11.8851 2.636 11.7197C2.43852 11.5527 2.35 11.392 2.35 11.25V9V8.9H2.25H1.49976H1.39976V9V11.25C1.39976 11.9781 1.9998 12.5657 2.89414 12.9659C3.79505 13.3691 5.02869 13.6 6.37524 13.6C7.72142 13.6 8.95489 13.3691 9.85571 12.9659C10.75 12.5657 11.35 11.9781 11.35 11.25V9Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M11.35 11.25V11.15H11.25H10.4998H10.3998V11.25V13.5C10.3998 13.642 10.3113 13.8028 10.1139 13.9698C9.91834 14.1351 9.62946 14.2946 9.26369 14.4335C8.53301 14.7111 7.51422 14.8998 6.37524 14.8998C5.23625 14.8998 4.21728 14.7111 3.48641 14.4335C3.12055 14.2946 2.83158 14.1351 2.636 13.9697C2.43852 13.8027 2.35 13.642 2.35 13.5V11.25V11.15H2.25H1.49976H1.39976V11.25V13.5C1.39976 14.2281 1.9998 14.8157 2.89414 15.2159C3.79505 15.6191 5.02869 15.85 6.37524 15.85C7.72142 15.85 8.95489 15.6191 9.85571 15.2159C10.75 14.8157 11.35 14.2281 11.35 13.5V11.25Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M11.35 13.5V13.4H11.25H10.4998H10.3998V13.5V15.75C10.3998 15.892 10.3113 16.0528 10.1139 16.2198C9.91834 16.3851 9.62946 16.5446 9.26369 16.6835C8.53301 16.9611 7.51422 17.1498 6.37524 17.1498C5.23625 17.1498 4.21728 16.9611 3.48641 16.6835C3.12055 16.5446 2.83158 16.3851 2.636 16.2197C2.43852 16.0527 2.35 15.892 2.35 15.75V13.5V13.4H2.25H1.49976H1.39976V13.5V15.75C1.39976 16.4781 1.9998 17.0657 2.89414 17.4659C3.79505 17.8691 5.02869 18.1 6.37524 18.1C7.72142 18.1 8.95489 17.8691 9.85571 17.4659C10.75 17.0657 11.35 16.4781 11.35 15.75V13.5Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M10.5395 13.4945L10.5626 13.5506L10.6231 13.556C10.9475 13.5851 11.2823 13.6 11.6248 13.6C12.9713 13.6 14.205 13.3692 15.1059 12.966C16.0002 12.5657 16.6003 11.9781 16.6003 11.25V9.00003V8.90003H16.5003H15.7501H15.6501V9.00003V11.25C15.6501 11.392 15.5615 11.5528 15.364 11.7198C15.1685 11.8852 14.8795 12.0446 14.5136 12.1835C13.7828 12.4611 12.7638 12.6498 11.6248 12.6498C11.278 12.6498 10.9424 12.6324 10.6223 12.6004L10.5096 12.5891L10.5123 12.7023C10.5165 12.8717 10.5209 13.0392 10.5253 13.203C10.5276 13.2894 10.5298 13.3748 10.532 13.459L10.5325 13.4774L10.5395 13.4945L10.5395 13.4945Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            <path d="M10.5989 15.7459L10.6207 15.8065L10.6849 15.8117C10.9891 15.8365 11.3041 15.85 11.6246 15.85C12.9712 15.85 14.2048 15.6191 15.1057 15.2159C16.0001 14.8157 16.6001 14.2281 16.6001 13.5V11.25V11.15H16.5001H15.7499H15.6499V11.25V13.5C15.6499 13.642 15.5614 13.8027 15.3639 13.9697C15.1683 14.1351 14.8793 14.2946 14.5135 14.4335C13.7826 14.7111 12.7636 14.8998 11.6246 14.8998C11.2994 14.8998 10.984 14.8844 10.682 14.8559L10.5696 14.8453L10.5726 14.9582C10.5778 15.1476 10.5821 15.3097 10.5855 15.4372C10.5891 15.5703 10.5916 15.6657 10.593 15.7149L10.5935 15.7309L10.5989 15.7459L10.5989 15.7459Z" fill="#FF3366" stroke="#FF3366" stroke-width="0.2"/>
            </g>
            <defs>
            <clipPath id="clip0_5530_2742">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>

        , CardName: "USERS WITH SAVINGS", numbers: '102,453'},
    ];

  return (
    <div className={styles.contCard}>
        <span className={styles.nameCard}>{cardName}</span>
        <div className={styles.CardBox}>
        {dashBoardMainItems.map(item => (
            <div className={styles.Cards} key={item.id} id={item.id.toString()}>
                <div className={styles.iconBx}>
                    {item.icons}
                </div>
                <div className={styles.CardName}>{item.CardName}</div>
                <div className={styles.Numbers}>{item.numbers}</div>
            </div>
        ))}
        </div>
    </div>
);
}



export default CardClick;