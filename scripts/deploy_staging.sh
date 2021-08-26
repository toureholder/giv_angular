echo "###### Starting deployment to staging ######"

npm install -g firebase-tools

firebase deploy --only hosting:staging --token "$FIREBASE_TOKEN"