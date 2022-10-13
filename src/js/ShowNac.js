const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24.726" height="24.726" viewBox="0 0 24.726 24.726"><path d="M14.363,4.248A10.115,10.115,0,1,1,4.248,14.363,10.115,10.115,0,0,1,14.363,4.248m0-2.248a12.307,12.307,0,1,0,8.758,3.6A12.363,12.363,0,0,0,14.363,2Z" transform="translate(-2 -2)" fill="#fff"/><path d="M21.631,20.04l3.147-3.091a1.18,1.18,0,0,0,.112-1.517,1.068,1.068,0,0,0-1.686-.112l-3.147,3.147-3.147-3.147a1.068,1.068,0,0,0-1.686.112,1.18,1.18,0,0,0,.112,1.517l3.147,3.091L15.338,23.13a1.18,1.18,0,0,0-.112,1.517,1.068,1.068,0,0,0,1.686.112l3.147-3.147L23.2,24.76a1.068,1.068,0,0,0,1.686-.112,1.18,1.18,0,0,0-.112-1.517Z" transform="translate(-7.695 -7.677)" fill="#fff"/></svg>`
const humbergerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="27.311" height="21.242" viewBox="0 0 27.311 21.242"><path d="M33.311,11.517a1.517,1.517,0,0,1-1.517,1.517H7.517A1.517,1.517,0,0,1,6,11.517H6A1.517,1.517,0,0,1,7.517,10H31.794A1.517,1.517,0,0,1,33.311,11.517Z" transform="translate(-6 -10)"/><path d="M33.311,23.517a1.517,1.517,0,0,1-1.517,1.517H7.517A1.517,1.517,0,0,1,6,23.517H6A1.517,1.517,0,0,1,7.517,22H31.794A1.517,1.517,0,0,1,33.311,23.517Z" transform="translate(-6 -12.896)"/><path d="M33.311,35.517a1.517,1.517,0,0,1-1.517,1.517H7.517A1.517,1.517,0,0,1,6,35.517H6A1.517,1.517,0,0,1,7.517,34H31.794A1.517,1.517,0,0,1,33.311,35.517Z" transform="translate(-6 -15.793)"/></svg>`

class ShowNav {
    constructor(){
        this.navBtn = document.querySelector('.humbergur-icon')

        // nav menu 
        this.nav = document.querySelector('.nav__nav')


        this.navBtn.addEventListener('click',() => {
            this.check()
        })
    }

    check = () => {
        if(!this.nav.classList.contains('show')){
             this.navBtn.innerHTML = closeIcon
            this.showNav()
        }else{
            this.navBtn.innerHTML = humbergerIcon
            this.hideNav()
        }
    }


    showNav = () => {
        this.nav.classList.remove('hide')
        this.nav.classList.add('show')

    }

    hideNav = () => {
        this.nav.classList.remove('show')
        this.nav.classList.add('hide')
    }

}


export default ShowNav