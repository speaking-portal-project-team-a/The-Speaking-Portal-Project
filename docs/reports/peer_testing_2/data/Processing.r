dat = read.csv("C:/Users/matta/Downloads/COSC 499 Peer Testing II - Speaking Portal Project Team A (Responses) - Form Responses 1.csv")

library("dplyr")



for(i in (1:length(rownames(dat)))){
  for(j in (1:length(colnames(dat)))){
    if(dat[i,j] == "Strongly Agree") dat[i,j] = 5;
    if(dat[i,j] == "Agree") dat[i,j] = 4;
    if(dat[i,j] == "Neutral") dat[i,j] = 3;
    if(dat[i,j] == "Disagree") dat[i,j] = 2;
    if(dat[i,j] == "Strongly Disagree") dat[i,j] = 1;
  }
}


colnames(dat)[grepl("The.avatar.s.lips.are.synchronized.to.the.words.being.said..In.other.words..the.mouth.movements.appear.natural.for.the.sounds.being.produced.", colnames(dat))] = 'Lip-Sync'
colnames(dat)[grepl('The.avatar.s.blinking.appears.natural.', colnames(dat))] = 'Natural Blinking'
colnames(dat)[grepl('The.video.was.generated.within.a.reasonable.amount.of.time.', colnames(dat))] = 'Video Generation Time'
colnames(dat)[grepl('The.avatar.changes.body.poses.at.a.reasonable.rate.', colnames(dat))] = 'Pose Change Rate'
colnames(dat)[grepl('The.instructions.in.the.README.are.clear.',  colnames(dat))] = 'Clear README'
colnames(dat)[grepl('The.naming.scheme.of.the.character.image.assets.makes.sense.', colnames(dat))] = 'Good Image Name Scheme'
colnames(dat)[grepl('If.an.artist.provided.you.with.the.files.for.a.new.character.',  colnames(dat))] = 'Easy to Locate Image Directory'



return_mean = function(colname){
  avg = c()
  for(i in which(colnames(dat)==colname)){
    avg = append(avg,(mean(na.omit(as.numeric(dat[,i])))))
  }
  return(mean(avg))
}

return_rows = function(colname){
  avg = c()
  for(i in which(colnames(dat)==colname)){
    avg = append(avg,dat[,i])
  }
  avg = na.omit(as.numeric(avg))
  return(avg)
}

dfcol = c('Lip-Sync','Natural Blinking','Video Generation Time','Pose Change Rate','Clear README','Good Image Name Scheme','Easy to Locate Image Directory')
out = t(as.data.frame(sapply(dfcol,function(x) return_mean(x))))
write.csv(out, "C:/Users/matta/Downloads/AVGs.csv", row.names=FALSE)
write.csv(dat, "C:/Users/matta/Downloads/formResponses.csv", row.names=FALSE)
library("ggplot")

pdf("C:/Users/matta/Downloads/mygraph.pdf", width = 11, height = 8 )
plot(out)
