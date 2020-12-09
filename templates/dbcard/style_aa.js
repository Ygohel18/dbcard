import React, { Component } from 'react'
import styles from '../../styles/DbCardStyleAa.module.css'
import Image from 'next/image'


class DbCardStyleAa extends React.Component {
    render() {
        return (
            <a className={styles.container}>

                <div className={styles.head}>
                    <div className={styles.profile}></div>
                    <h1>{this.props.name}</h1>
                </div>

                <h3>{this.props.subtitle}</h3>

                <Item src="/ic_whatsapp.png" value="https://api.whatsapp.com/send?phone=+917698094485" name="7698094485"></Item>
                <Item src="/ic_instagram.png" value="https://www.instagram.com/ygohel18" name="@ygohel18"></Item>
                <Item src="/ic_globe.png" value="https://ygohel18.planckstudio.in?medium=app" name="ygohel18.planckstudio.in"></Item>
                <Item src="/ic_mail.png" value="mailto:ygohel18@planckstudio.in" name="ygohel18@planckstudio.in"></Item>

                <a className={styles.cta} href={this.props.tel}>
                    <p>{this.props.cta}</p>
                </a>
            </a>
        );
    }
}

class Item extends React.Component {
    render() {
        return (
            <a className={styles.item}>
                <div className={styles.itemBox}>
                    <Image src={this.props.src} height="100%" width="100%"/>
                </div>
                <a href={this.props.value}>
                    <h4>{this.props.name}</h4>
                </a>
            </a>
        );
    }
}

export default DbCardStyleAa;