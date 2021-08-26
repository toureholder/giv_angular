echo "###### Starting deployment to production ######"

npm install -g firebase-tools

firebase deploy --only hosting:production --token "$FIREBASE_TOKEN"