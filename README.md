# WORKOUT SCHEDULE BACK

## Description:

TODO Description......
## Technologies used:
- Nodejs (TypeScript)
- Lambda
- GraphQl
- AppSync
- RDS (POSTGRESQL)
- Others AWS Services (CloudWatch/VPC/Security Groups....)
## PrereRequisites:

- NodeJs
- Aws CLI

## Instalation:

```
npm install --legacy-peer-deps
```
## 🚀 SECURITY GROUP

####

```
aws cloudformation create-stack --template-body file://./aws/security-group/lambda-sec/lambda-sec-group.yml --stack-name sge-dev-lambda-security-group --profile rich

aws cloudformation create-stack --template-body file://./aws/security-group/rds-sec/rds-sec-group.yml --stack-name sge-dev-rds-security-group --profile rich
```

## 🚀 RDS

####

```
aws cloudformation create-stack --template-body file://./aws/rds/rds-cloudformation.template.dev.yml --stack-name sge-dev-rds --profile rich
```

## 🔨 Build Aplication

```
npm run package:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

## 🚀 Deploy Aplication

We are using serverless-webpack this follow command will build and deploy the application in a specific stack:

```
npm run deploy:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

## 🏃 RUN/TEST

Test:

```
npm run deploy:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

To Debug use insominia

### Organizations

[SGE](https://www.nossosite.com.br/)

## 🤝 Code Contributors

👤 **Rodrigo Gonçalves**

## 📝 License

Copyright © 2022 [SGE](https://www.nossosite.com.br/)