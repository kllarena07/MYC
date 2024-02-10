from youtube_transcript_api import YouTubeTranscriptApi
import json
# retrieve the available transcripts
transcript_list = YouTubeTranscriptApi.list_transcripts('h8A9SVFdG_Y')
srt = YouTubeTranscriptApi.get_transcript("pxiP-HJLCx0")

#iterate over all available transcripts
for transcript in transcript_list:
    # fetch the actual transcript data
    timed_data = transcript.fetch()

#writer for whole video transcript
with open("subtitles.txt", "a") as file:
    for i in srt:
        file.write(i['text'])


    
# Convert list of dicts to JSON string
json_data = json.dumps(timed_data, indent=4)

# Export JSON string to a file
with open("timed_text.json", "w") as file:
    file.write(json_data)
