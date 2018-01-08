import boto3


def map_instances(reservation):
    return reservation["Instances"][0]

ec2 = boto3.client('ec2', region_name="ap-northeast-1")
result = ec2.describe_instances()

instances = list(map(map_instances, result["Reservations"]))
print(instances)
