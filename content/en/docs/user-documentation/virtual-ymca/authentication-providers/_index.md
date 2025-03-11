---
title: Authentication Providers
weight: 3
no_list: true
---

The authentication options available for gating your content depend on your Customer Management System (CRM). Currently, the following options can be used to control access to content within the Virtual Y website.

## Personify

### Single Sign-On (SSO)

Requires members to log in using their existing Personify CRM credentials.

## Daxko

### Single Sign-On (SSO)

Requires members to log in using their existing Daxko CRM credentials.

**Note:** Daxko API access is required and may incur API usage fees from Daxko. Contact Daxko for details on API access and associated costs.

### Barcode Validation

Requires members to enter their barcode. The Virtual Y site validates the barcode against the Daxko system before granting access.

[Set up Daxko Barcode Validation](./daxko-barcode).

## ReClique

### Single Sign-On (SSO)

Requires members to log in using their existing ReClique CORE CRM credentials.

## CSV File Uploads

Allows associations to upload a CSV file containing membership information to grant access. Two options are available:

### CSV Upload without Email Verification

Upload a CSV file containing member email addresses. The Virtual Y site validates the entered email address against the uploaded list before granting access.

### CSV Upload with Email Verification

Upload a CSV file containing member email addresses. The Virtual Y site sends a verification email to the address provided. The member must click the link in the email to gain access.
