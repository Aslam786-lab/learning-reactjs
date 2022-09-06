import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //1st approach
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Ak</div>
        // }else{
        //     return <div>Welcome guest</div>
        // }

        // ========================================
        //2nd approach(element variable)
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Ak</div>
        // }else{
        //     message = <div>Welcome guest</div>
        // }

        // return message

        // ==========================================

        // 3rd approach(ternery)
        // return this.state.isLoggedIn ? <div>Welcome Ak</div> : <div>Welcome guest</div>

        // ==========================================

        // 4th approach(short circuit this apprach is good if we want to show something or nothing  )
        return this.state.isLoggedIn && <div>Welcome Ak</div>
}
}

export default UserGreeting