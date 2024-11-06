// Dynamically add the boxicons stylesheet to the document
const link = document.createElement('link');
link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
link.rel = 'stylesheet';
document.head.appendChild(link);

export const scaleFactor = 4;

// Hugging Face icon as an external image
const huggingFaceIcon = `<img src="https://huggingface.co/front/assets/huggingface_logo.svg" alt="Hugging Face" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 4px;">`;

export const dialogueData = {
  pc: `In my computer, I work mostly with Python and C++ using various deep learning libraries and frameworks,
    such as <i class='bx bxl-pytorch'></i> PyTorch, <i class='bx bxl-windows'></i> ONNX, <i class='bx bx-chip'></i> CUDA, <i class='bx bx-memory-card'></i> cuDNN,
    <i class='bx bx-atom'></i> RLlib, <i class='bx bxl-python'></i> OpenCV, <i class='bx bxs-game'></i> Gym, ${huggingFaceIcon} Hugging Face, and others
    to develop projects in this field.
    Here is my <a href="https://github.com/TheRadDani" target="_blank"><i class='bx bxl-github'></i> GitHub</a>!`,

  "cs-degree": `I have a Bachelor's in Electrical Engineering from the <a href="https://www.ucr.ac.cr/" target="_blank">Universitdad de Costa Rica</a> <a href="documents/Daniel_Ferreto_Bacherlors_Diploma_Certificate_en.pdf" target="_blank">Degree (EN)</a>
  and I am currently studying a Master's in Computer Science at <a href="https://www.tec.ac.cr/" target="_blank">Instituto Tecnologico de Costa Rica</a>`,
  "sofa-table": `I like spending time with my wife Teffy and travel to different  places and we have
  and ongoing idea to create YouTube channel for our trips.`,
  tv: `I like taking courses related to Deep Learning and Computer Science to stay updated with
   the latest advances and concepts in the field. Whether it's exploring new architectures,
    optimization techniques, or applications. I have certificates like: 
    <a href="https://www.coursera.org/account/accomplishments/verify/H32S3C7SXVWX" target="_blank">Generative AI with Large Language Models</a>
    <a href="https://www.coursera.org/account/accomplishments/certificate/4QKHDC6SMR2J" target="_blank">Production Machine Learning Systems</a>
    <a href="https://www.coursera.org/account/accomplishments/certificate/CP5RWWPRKYZ8" target="_blank">Artificial Intelligence on Microsoft Azure</a>
    <a href="https://www.coursera.org/account/accomplishments/certificate/39URL4P7LP59" target="_blank">Introduction to Concurrent Programming with GPUs</a>`,

  bed: `When it is time to rest, I like playing bass and guitar, excersing, practice calisthenics, 
  practice languges like Italian and German, watching football, reading, listening to music, my favorite artist is
  Gustavo Cerati.`,
  resume: `This is my <a href="documets/vs/ferreto_cv.pdf" target="_blank">CV</a>
  Contact me at <a href="mailto:ldanielfch@gmail.com" class="btn">ldanielfch@gmail.com</a> if you have any interesting job opportunities!`,
  projects: `I have different Deep Learning projects such as <a href="https://github.com/TheRadDani/Image-Captioning" target="_blank">Image Captioning</a>,
  <a href="https://github.com/TheRadDani/PytorchDistributedTraining" target="_blank">Distributed Training for LSTM model</a>, Visual Object Tracking, 
  Pose Estimation and many more.`,
  library: `I like reading Deep Learning Books such as:
  
  <a href="https://course.fast.ai/Resources/book.html" target="_blank">Deep Learning for Coders with fastai and PyTorch</a>,
  
  <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target="_blank">Hands-On Machine Learning With Scikit-Learn, Keras, and Tensorflow</a>,

  <a href="https://www.oreilly.com/library/view/quick-start-guide/9780138199425/" target="_blank">Quick Start Guide to Large Language Models: Strategies and Best Practices for Using ChatGPT and Other LLMs</a>,
  <a href="Transformers for Natural Language Processing: Build Innovative Deep Neural Network Architectures for NLP with Python, PyTorch, TensorFlow, BERT, RoBERTa, and More" target="_blank">Transformers for Natural Language Processing: Build Innovative Deep Neural Network Architectures for NLP with Python, PyTorch, TensorFlow, BERT, RoBERTa, and More</a>,
  <a href="https://szeliski.org/Book/" target="_blank">Computer Vision: Algorithms And Applications</a>
  <a href="https://www.oreilly.com/library/view/practical-deep-learning/9781492034858/" 
  target="_blank">Practical Deep Learning for Cloud, Mobile & Edge</a>`,
  exit: `If you want to exit Daniel's portfolio, just close the tab.`,
};