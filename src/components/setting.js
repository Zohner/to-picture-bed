import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { updateConfig } from "../actions"

let InfoContainer = styled.div`
    flex:1;
    line-height:30px;
    text-align: center;
`

let Input = styled.input`
    border: 1px solid white;
`

class Setting extends React.Component{
    constructor(props){
        super(props)

        this.inputAK = this.inputAK.bind(this)
        this.inputSK = this.inputSK.bind(this)
        this.inputScope = this.inputScope.bind(this)
        this.inputDomain = this.inputDomain.bind(this)
    }

    inputAK(e){
        let value = e.target.value
        this.props.updateConfig({
            AK: value
        })
    }

    inputSK(e){
        let value = e.target.value
        this.props.updateConfig({
            SK: value
        })
    }

    inputScope(e){
        let value = e.target.value
        this.props.updateConfig({
            scope: value
        })
    }

    inputDomain(e){
        let value = e.target.value
        this.props.updateConfig({
            domain: value
        })
    }

    render(){
        let props = this.props
        return (
            <>
                <InfoContainer>
                    AK:
                    <Input onChange={this.inputAK} value={props.AK}></Input>
                </InfoContainer>
                <InfoContainer>
                    SK:
                    <Input onChange={this.inputSK} value={props.SK}></Input>
                </InfoContainer>
                <InfoContainer>
                    scope:
                    <Input onChange={this.inputScope} value={props.scope}></Input>
                </InfoContainer>
                <InfoContainer>
                    domain:
                    <Input onChange={this.inputDomain} value={props.domain}></Input>
                </InfoContainer>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        AK: state.globalConfig.AK,
        SK: state.globalConfig.SK,
        scope: state.globalConfig.scope,
        domain: state.globalConfig.domain
    }
}

export default connect(mapStateToProps, { updateConfig })(Setting)