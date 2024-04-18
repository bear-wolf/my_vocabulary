export {}
import express from 'express'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
const tokenKey = '1a2b-3c4d-5e6f-7g8h'

export const jwtAuth = (req:any, res:any, next:any) => {
    if (req.headers.authorization) {
        let tokenParts = req.headers.authorization
            .split(' ')[1]
            .split('.')
        let signature = crypto
            .createHmac('SHA256', tokenKey)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64')

        if (signature === tokenParts[2])
            req.user = JSON.parse(
                Buffer.from(tokenParts[1], 'base64').toString(
                    'utf8'
                )
            )
        next()
    }
    next()
}
