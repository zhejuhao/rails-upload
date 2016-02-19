class ArticlesController < ApplicationController
  def new
    @article = Article.all
    p '=========================='
    p  @article
  end
  # def save_info
  #   @article = Article.new(text:params[:file][:text])
  #   # render plain: params[:article].inspect
  #   # @article = Article.new(text:params[:word])
  #   # # @article = Article.new(article_params)
  #   p @article
  #   @article.save
  #   # render :json =>{status:true}
  #   redirect_to '/articles/upload'
  # end
  def upload
    @photo = Article.all.reverse_order
    @article = Article.all.reverse_order
  end
  def save_image
    # @photo = Article.new(photo:"/test.png")
    # @photo.save
    if params[:file][:file] !=nil
      File.extname(params[:file][:file].original_filename)
      content = params[:file][:file].read

      File.open("./public/#{Time.now}.png",'wb+') do |item|
      item.write(content)
      end
    @article = Article.new(text:params[:file][:text] ,photo:"/#{Time.now}.png")
    @article.save
    redirect_to '/articles/new'
    else
      if params[:file][:text] !=""
      @article = Article.new(text:params[:file][:text] )
      @article.save
      redirect_to '/articles/new'
      else
      redirect_to '/articles/new'
      end

    end
    # if params[:file][:text] =""
    #   render :text =>"请输入文字"
    #   redirect_to '/articles/new'
    # end
  end
  # def show_image
  #   @image = params[:file][:file]
  #   redirect_to '/articles/new'
  # end
  private
  def article_params
    params.require (:text).permit(:text)
  end

end
