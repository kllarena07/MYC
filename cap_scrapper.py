from youtube_transcript_api import YouTubeTranscriptApi
import json
# retrieve the available transcripts
transcript_list = YouTubeTranscriptApi.list_transcripts('h8A9SVFdG_Y')

#iterate over all available transcripts
for transcript in transcript_list:
    # fetch the actual transcript data
    data = transcript.fetch()
    
	#translating the transcript will return another transcript object
    #print(transcript.translate('en').fetch())

# for item in data:
#     item['end'] = round(item['start'] + item['duration'], 2)

    
# Convert list of dicts to JSON string
json_data = json.dumps(data, indent=4)

# Export JSON string to a file
with open("output_text.json", "w") as file:
    file.write(json_data)
