export const getIcon = (voteAverage: number) => {
    if (voteAverage >= 8.0) {
      return require('../assets/images/garantyicon.png');
    } else if (voteAverage >= 6.5) {
      return require('../assets/images/qualityicon.png');
    } else {
      return require('../assets/images/crossbones.png');
    }
};