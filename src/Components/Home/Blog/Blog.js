import React from 'react';

const Blog = () => {
    return (
        <div className='fs-4 text'>
            <p className='container my-5'>
                <strong>1. Difference between authorization and authentication</strong>
                <table className='border border-3 mx-auto'>
                    <tr className='border border-3 p-5'>
                        <th>Authentication</th>
                        <th>Authorization</th>
                    </tr>
                    <tr className='border border-3 p-2'>
                        <td>Authentication is the process of identifying a user to provide access to a system.</td>
                        <td>Authorization is the process of giving permission to access the resources.</td>
                    </tr>
                    <tr className='border border-3 p-2'>
                        <td>In this, the user or client and server are verified.</td>
                        <td>In this, it is verified that if the user is allowed through the defined policies and rules.</td>
                    </tr>
                    <tr className='border border-3 p-2'>
                        <td>It is usually performed before the authorization.</td>
                        <td>It is usually done once the user is successfully authenticated.</td>
                    </tr>
                    <tr className='border border-3 p-2'>
                        <td>It requires the login details of the user, such as user name and password, etc.</td>
                        <td>It requires the user's privilege or security level.</td>
                    </tr>
                    <tr className='border border-3 p-2'>
                        <td>Data is provided through the Token Ids.</td>
                        <td>Data is provided through the access tokens.</td>
                    </tr>
                </table>

                <br /><br />
                
                <strong>2 Why are you using firebase? What other options do you have to implement authentication?</strong>
                <br />
                <span>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                    You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.

                    As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.</span>

                <br /><br />
                <strong>3. What other services does firebase provide other than authentication</strong>
                <br />
                There are many services which Firebase provides, Most useful of them are:

                Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config
            </p>
        </div>
    );
};

export default Blog;