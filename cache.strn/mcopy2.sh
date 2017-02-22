#!/bin/bash

#aws ec2 describe-instances  --query 'Reservations[*].Instances[*].{instanceid:InstanceId,imageid:ImageId,state:State.Name,name:Tags[0].Value}' --output table | grep ami | awk -F '|' '{gsub(/^[ \t]+/, "", $2);print $2;}' | while read line; do aws ec2 describe-images --image-ids $line --query 'Images[*].{ImageId:ImageId,State:State,OwnerId:OwnerId,Description:Description}' --output table ; done;


aws s3 ls s3://$1 | egrep 'js|html' | awk '{print $4;}' | while read line; do echo $line ; aws s3 cp s3://$1/$line .; done;




 

