class ShowProjects{
    constructor(){
        this.allPojectsBtn = document.querySelector('.btn-all')
        this.uiUxBtn = document.querySelector('.btn-ui-ux')
        this.wordpressBtn = document.querySelector('.btn-wordpress')

        this.allProjects = document.querySelectorAll('.project-card')

        // add Eevents
        this.allPojectsBtn.addEventListener('click',this.showAllProjects)
        this.uiUxBtn.addEventListener('click',this.showUiUxProjects)
        this.wordpressBtn.addEventListener('click',this.showWordpressProjects)
    }

    showAllProjects = () => {
        if(!this.allPojectsBtn.classList.contains('active')){
            this.uiUxBtn.classList.remove('active')
            this.wordpressBtn.classList.remove('active')

            this.allPojectsBtn.classList.add('active')
        }

        this.allProjects.forEach((project) => {
            if(!project.classList.contains('active')){
                project.classList.add('active')
            }
        })


    }


    showUiUxProjects = () => {

        


        if(!this.uiUxBtn.classList.contains('active')){
            this.allPojectsBtn.classList.remove('active')
            this.wordpressBtn.classList.remove('active')

            this.uiUxBtn.classList.add('active')
        }   

        this.allProjects.forEach((project) => {
            if(!project.classList.contains('ui-ux')){
                project.classList.remove('active')
            }

            if(project.classList.contains('ui-ux') && !project.classList.contains('active')){
                project.classList.add('active')
            }


        })
    }

    showWordpressProjects = () => {
        if(!this.wordpressBtn.classList.contains('active')){
            this.uiUxBtn.classList.remove('active')
            this.allPojectsBtn.classList.remove('active')

            this.wordpressBtn.classList.add('active')
        }

        this.allProjects.forEach((project) => {
            if(!project.classList.contains('wordpress')){
                project.classList.remove('active')
            }
            if(project.classList.contains('wordpress') && !project.classList.contains('active')){
                project.classList.add('active')
            }
        })


    }


}


export default ShowProjects