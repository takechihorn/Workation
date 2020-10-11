import firebase from '../plugins/firebase'

export const user = {
  namespaced: true,

  state: () => ({}),

  mutations: {},

  getters: {
    isAuth(getters) {
      // メール認証するまで
      const user = firebase.auth().currentUser
      return user ? user.emailVerified : false
    }
  },

  actions: {
    // ユーザー作成
    async createUser({
      commit,
      dispatch
    }, {
      email,
      password
    }) {
      const auth = firebase.auth()

      await auth.createUserWithEmailAndPassword(email, password)
        .then(async () => {
          await dispatch('confirmEmail')
        })
        .catch(error => {
          dispatch('alertMessage', {
            errorCode: error.code,
            errorMessage: error.message
          })
        })
    },
    async confirmEmail() {
      const user = firebase.auth().currentUser

      user.sendEmailVerification().then(() => {
        alert('確認メールを送信しました。メールアドレスをご確認ください')
      }).catch(error => {
        console.log(error)
      })
    },
    // パスワードの再設定
    async sendPasswordResetEmail({
      dispatch
    }, email) {
      const auth = firebase.auth()

      auth.sendPasswordResetEmail(email)
        .then(() => {
          alert('メールを送信しました')
        }).catch(error => {
          dispatch('alertMessage', {
            errorCode: error.code,
            errorMessage: error.message
          })
        })
    },
    async login({
      dispatch
    }, {
      email,
      password
    }) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          dispatch('alertMessage', {
            errorCode: error.code,
            errorMessage: error.message
          })
        })
    },
    // アラートメッセージ
    alertMessage({
      commit
    }, {
      errorCode,
      errorMessage
    }) {
      switch (errorCode) {
        case 'auth/wrong-password':
          alert('パスワードが違います')
          break
        case 'auth/invalid-email':
          alert('無効のメールアドレスです')
          break
        case 'auth/user-not-found':
          alert('ユーザーが存在しません')
          break
        case 'auth/weak-password':
          alert('6文字以上でパスワードを設定してください')
          break
        case 'auth/email-already-in-use':
          alert('すでに存在しているメールアドレスです')
          break
        default:
          alert(errorMessage)
          break
      }
    }
  }
}

export default user
