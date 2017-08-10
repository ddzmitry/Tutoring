import React, {Component} from 'react'
import styled from 'styled-components'

export default function loggify(Wrapped) {

    /*
    this.setState({key: value})
    this.setState({value})

    this.setState(
        (prevState, props) => {
                // perform operations here
                    return{
                        //new object
                    }
        },
                () => {

                    my callback funciton
                }

    )
*/

    let originals = {}

    const methodsToLog = ["componentWillMount",
                            "componentDidMount",
                            "componentWillUnmount",
                            "componentWillReceiveProps",
                            "shouldComponentUpdate",
                            "componentWillUpdate",
                            "componentDidUpdate"]

    methodsToLog.forEach((method) => {

        if (Wrapped.prototype[method]) {

            originals[method] = Wrapped.prototype[method]

        }

        // This funciton changes the prototype of whole lifsycle of component/
        // it can have an access to the inner functionality of each method
        // That way you can totaly see what is going on during the events
        Wrapped.prototype[method] = function (...args) {

            let original = originals[method]

            console.groupCollapsed(`${Wrapped.displayName} called ${method}`)
                if(method === "componentWillReceiveProps" || "shouldComponentUpdate" || "componentWillUpdate" ) {
                    console.log(`next props`, args[0])
                }

              if(method ===  "shouldComponentUpdate"  || "componentWillUpdate") {
                    console.log(`nextState`, args[1])
                }
                    

            console.groupEnd()

            if (original) {
                original = original.bind(this)
                return original(...args)
            }

            if(method ===  "shouldComponentUpdate" && typeof original === 'undefined'){
                return true
            }

            if(method === 'componentDidUpdate'){

                console.log("PrevProps" ,args[0])
                console.log("PrevState" ,args[1])
            }

        }
             Wrapped.prototype.setState = function(partialstate,callback){
                 console.groupCollapsed(`${Wrapped.displayName} SetState `)
                 console.log('partial state' , partialstate)
                 console.log('cllback', callback)
                 console.groupEnd()
                 this.updater.enqueueSetState(this, partialstate , callback , 'setState')
             }


    })

    return class extends Component {

        render() {
            return (
                <LoggerContainer>
                    <H2>
                        {Wrapped.displayName}
                        is now loggified:
                    </H2>
                    <Wrapped {...this.props}/>
                </LoggerContainer>
            )
        }
    }
}

const LoggerContainer = styled.div `
  background-color: aliceblue;
  border: 2px grooved aquamarine;
  border-radius: 5px;
`

LoggerContainer.displayName = "LoggerContainer"

const H2 = styled.h2 `
  color: blueviolet;
`

H2.displayName = "H2"
